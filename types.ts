
import React from 'react';

export interface ReportData {
  title: string;
  authors: string[];
  supervisor: string;
  department: string;
  institution: string;
  session: string;
}

interface ContentBase {
    id: string;
    title: string;
    description?: string;
}

export interface ParagraphsContent {
    type: 'paragraphs';
    text: string[];
}

export interface SubsectionsContent {
    type: 'subsections';
    items: {
        title: string;
        text: string[];
        list?: string[];
    }[];
}

export interface TitlePageContent {
    type: 'title_page';
}

export interface GalleryContent {
    type: 'gallery';
    images: {
        src: string;
        caption: string;
    }[];
}

export interface TableContent {
    type: 'table';
    headers: string[];
    rows: (string | number)[][];
}

export interface AiAssistantContent {
    type: 'ai_assistant';
}

export type ReportSectionContent = TitlePageContent | ParagraphsContent | SubsectionsContent | GalleryContent | TableContent | AiAssistantContent;

export interface ReportSection extends ContentBase {
  content: ReportSectionContent;
}

export interface SectionListItem {
    id: string;
    title: string;
    icon: React.FC<{className?: string}>;
}

export interface Message {
  author: 'user' | 'ai';
  text: string;
}

export interface IElectronAPI {
  getChatHistory: () => Promise<Message[]>;
  addChatMessage: (message: Message) => Promise<void>;
  askAboutProject: (question: string) => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
