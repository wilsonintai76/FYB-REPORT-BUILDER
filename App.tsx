
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { AiAssistant } from './components/AiAssistant';
import { REPORT_DATA, SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState('title_page');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = SECTIONS.find(s => s.id === activeSectionId);

  const renderContent = () => {
    if (!activeSection) return <div>Section not found.</div>;

    if (activeSectionId === 'ai_assistant') {
      return <AiAssistant />;
    }
    
    return <ContentDisplay section={activeSection} />;
  };

  return (
    <div className="flex h-screen bg-gray-950 font-sans">
      <div 
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <Sidebar 
        activeSectionId={activeSectionId} 
        setActiveSectionId={setActiveSectionId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800 lg:justify-end">
          <button 
            className="p-2 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon />
          </button>
          <div className="text-right">
            <h1 className="text-sm sm:text-lg font-bold text-white tracking-wide">{REPORT_DATA.title}</h1>
            <p className="text-xs sm:text-sm text-gray-400">{REPORT_DATA.institution}</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);


export default App;
