import { contextBridge, ipcRenderer } from 'electron';
import { Message } from '../types';

contextBridge.exposeInMainWorld('electronAPI', {
  getChatHistory: (): Promise<Message[]> => ipcRenderer.invoke('get-chat-history'),
  addChatMessage: (message: Message): Promise<void> => ipcRenderer.invoke('add-chat-message', message),
  askAboutProject: (question: string): Promise<string> => ipcRenderer.invoke('ask-gemini', question),
});
