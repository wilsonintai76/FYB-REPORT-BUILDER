
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
// Fix: Import 'url' to derive __dirname, and 'process' to get correct typings for globals.
import { fileURLToPath } from 'url';
import process from 'process';
import { initializeDatabase, getChatHistory, addChatMessage } from './database';
import { GoogleGenAI } from "@google/genai";
import { REPORT_DATA, SECTIONS } from '../constants';

// Fix: Recreate __dirname for ES module environments where it's not available. This fixes the "Cannot find name '__dirname'" error.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Database Setup ---
const db = initializeDatabase();

// --- Gemini AI Setup ---
// The API_KEY must be set in the environment where the main process is executed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getProjectContext = (): string => {
  let context = `Project Title: ${REPORT_DATA.title}\n`;
  context += `Authors: ${REPORT_DATA.authors.join(', ')}\n`;
  context += `Supervisor: ${REPORT_DATA.supervisor}\n`;
  context += `Institution: ${REPORT_DATA.institution}\n\n`;

  SECTIONS.forEach(section => {
    if (section.id === 'title_page' || section.id === 'ai_assistant') return;

    context += `--- Section: ${section.title} ---\n`;
    if (section.description) {
      context += `Description: ${section.description}\n`;
    }

    const content = section.content;
    switch (content.type) {
      case 'paragraphs':
        context += content.text.join('\n') + '\n\n';
        break;
      case 'subsections':
        content.items.forEach(item => {
          context += `${item.title}\n`;
          context += item.text.join('\n');
          if (item.list) {
            context += '\n' + item.list.map(li => `- ${li}`).join('\n');
          }
          context += '\n\n';
        });
        break;
      case 'table':
        const headers = content.headers.join(' | ');
        const rows = content.rows.map(row => row.join(' | ')).join('\n');
        context += headers + '\n' + '-'.repeat(headers.length) + '\n' + rows + '\n\n';
        break;
      case 'gallery':
        context += 'This section contains technical drawings and diagrams.\n\n';
        break;
    }
  });
  return context;
};
const projectContext = getProjectContext();


// --- Window Creation ---
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    title: "FYP Report Generator"
  });

  // Assumes the React app is built into the root directory.
  mainWindow.loadFile(path.join(__dirname, '../index.html'));
}

// --- App Lifecycle & IPC Handlers ---
app.whenReady().then(() => {
  // Setup IPC handlers
  ipcMain.handle('get-chat-history', () => getChatHistory(db));
  ipcMain.handle('add-chat-message', (event, message) => addChatMessage(db, message));

  ipcMain.handle('ask-gemini', async (event, question) => {
    try {
      const model = 'gemini-2.5-flash';
      const systemInstruction = `You are an AI assistant for a project report. Your knowledge is strictly limited to the following project information. Answer the user's questions based ONLY on this context. If the answer is not in the context, say that you cannot answer. Be concise and helpful.
    
      CONTEXT:
      ${projectContext}`;

      const response = await ai.models.generateContent({
          model,
          contents: question,
          config: { systemInstruction }
      });
      return response.text;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later.";
    }
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  // Fix: Use imported 'process' object which has correct typings to fix the "Property 'platform' does not exist" error.
  if (process.platform !== 'darwin') {
    db.close();
    app.quit();
  }
});
