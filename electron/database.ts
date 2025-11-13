import sqlite3 from 'sqlite3';
import path from 'path';
import { app } from 'electron';
import { Message } from '../types';

const dbPath = path.join(app.getPath('userData'), 'chatHistory.db');
const verboseSqlite = sqlite3.verbose();

export const initializeDatabase = () => {
  const db = new verboseSqlite.Database(dbPath, (err) => {
    if (err) {
      console.error('Database opening error: ', err);
    } else {
      console.log(`Database opened successfully at ${dbPath}`);
    }
  });

  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT NOT NULL CHECK(author IN ('user', 'ai')),
        text TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  });

  return db;
};

export const getChatHistory = (db: sqlite3.Database): Promise<Message[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT author, text FROM messages ORDER BY timestamp ASC", [], (err, rows: Message[]) => {
      if (err) {
        console.error('Error fetching chat history:', err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

export const addChatMessage = (db: sqlite3.Database, message: Message): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO messages (author, text) VALUES (?, ?)',
      [message.author, message.text],
      (err) => {
        if (err) {
          console.error('Error adding chat message:', err);
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};
