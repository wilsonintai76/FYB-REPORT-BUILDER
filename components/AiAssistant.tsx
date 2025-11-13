
import React, { useState, useRef, useEffect } from 'react';
import { askAboutProject } from '../services/geminiService';
import { Card } from './ui/Card';
import { Message } from '../types';

const sampleQuestions = [
    "What is this project about?",
    "What are the main objectives?",
    "What is the total cost?",
    "What are the key components?",
];

export const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Start as true to load history
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await window.electronAPI.getChatHistory();
      if (history.length === 0) {
        setMessages([
          { author: 'ai', text: "Hello! I am an AI assistant with knowledge of this project report. How can I help you? You can ask me a question or try one of the suggestions below."}
        ]);
      } else {
        setMessages(history);
      }
      setIsLoading(false);
    };
    loadHistory();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent, question?: string) => {
    e.preventDefault();
    const userQuestion = question || input;
    if (!userQuestion.trim() || isLoading) return;

    const userMessage: Message = { author: 'user', text: userQuestion };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      await window.electronAPI.addChatMessage(userMessage);

      const aiResponseText = await askAboutProject(userQuestion);
      const aiMessage: Message = { author: 'ai', text: aiResponseText };
      
      await window.electronAPI.addChatMessage(aiMessage);
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = { author: 'ai', text: "Something went wrong. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
      await window.electronAPI.addChatMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSampleQuestionClick = (question: string) => {
    handleSubmit(new Event('submit', { cancelable: true }) as unknown as React.FormEvent, question);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-mono text-white tracking-tighter">Project Q&A Assistant</h2>
        <p className="text-lg text-gray-400 mt-2">Powered by Gemini</p>
      </header>
      <Card className="flex flex-col h-[70vh]">
        <div className="flex-1 overflow-y-auto pr-4 space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.author === 'user' ? 'justify-end' : ''}`}>
              {msg.author === 'ai' && <AIIcon />}
              <div className={`max-w-md p-3 rounded-lg ${msg.author === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <AIIcon />
              <div className="max-w-md p-3 rounded-lg bg-gray-800 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse-fast"></span>
                  <span className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse-fast" style={{animationDelay: '0.2s'}}></span>
                  <span className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse-fast" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        {!isLoading && messages.length <= 1 && (
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {sampleQuestions.map(q => (
                    <button key={q} onClick={() => handleSampleQuestionClick(q)} className="text-left text-sm p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                        {q}
                    </button>
                ))}
            </div>
        )}
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2 border-t border-gray-800 pt-4">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about the project..."
            disabled={isLoading}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-md p-2 text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          />
          <button type="submit" disabled={isLoading} className="bg-cyan-500 text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">
            {isLoading ? '...' : 'Send'}
          </button>
        </form>
      </Card>
    </div>
  );
};

const AIIcon = () => (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex-shrink-0 flex items-center justify-center border border-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
            <path d="M12 8V4H8"/>
            <rect x="4" y="12" width="8" height="8" rx="2"/>
            <path d="M8 12v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"/>
            <path d="M16 12h-2a2 2 0 0 0-2 2v4"/>
        </svg>
    </div>
);
