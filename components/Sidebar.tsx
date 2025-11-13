import React from 'react';
import { SectionListItem } from '../types';

// --- Icons for Sidebar ---
// These are defined here to avoid loading React components in the main Electron process.
const FileTextIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),
        React.createElement('polyline', {points:"14 2 14 8 20 8"}),
        React.createElement('line', {x1:"16", y1:"13", x2:"8", y2:"13"}),
        React.createElement('line', {x1:"16", y1:"17", x2:"8", y2:"17"}),
        React.createElement('line', {x1:"10", y1:"9", x2:"8", y2:"9"}))
);
const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),
        React.createElement('path', {d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))
);
const MicroscopeIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M6 18h8"}),
        React.createElement('path', {d:"M3 22h18"}),
        React.createElement('path', {d:"M14 22a7 7 0 1 0 0-14h-1"}),
        React.createElement('path', {d:"M9 14h2"}),
        React.createElement('path', {d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}),
        React.createElement('path', {d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}))
);
const WrenchIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}))
);
const BarChartIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('line', {x1:"12", y1:"20", x2:"12", y2:"10"}),
        React.createElement('line', {x1:"18", y1:"20", x2:"18", y2:"4"}),
        React.createElement('line', {x1:"6", y1:"20", x2:"6", y2:"16"}))
);
const FlagIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),
        React.createElement('line', {x1:"4", y1:"22", x2:"4", y2:"15"}))
);
const ImageIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('rect', {x:"3", y:"3", width:"18", height:"18", rx:"2", ry:"2"}),
        React.createElement('circle', {cx:"8.5", cy:"8.5", r:"1.5"}),
        React.createElement('polyline', {points:"21 15 16 10 5 21"}))
);
const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    React.createElement('svg', {xmlns:"http://www.w3.org/2000/svg", width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"2", strokeLinecap:"round", strokeLinejoin:"round", className},
        React.createElement('path', {d:"M12 8V4H8"}),
        React.createElement('rect', {x:"4", y:"12", width:"8", height:"8", rx:"2"}),
        React.createElement('path', {d:"M8 12v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"}),
        React.createElement('path', {d:"M16 12h-2a2 2 0 0 0-2 2v4"}))
);

const SECTION_LIST: SectionListItem[] = [
    { id: 'title_page', title: 'Title Page', icon: FileTextIcon },
    { id: 'abstract', title: 'Abstract', icon: BookOpenIcon },
    { id: 'chapter1', title: 'Introduction', icon: BookOpenIcon },
    { id: 'chapter3', title: 'Methodology', icon: WrenchIcon },
    { id: 'chapter4', title: 'Results', icon: BarChartIcon },
    { id: 'cost_table', title: 'Cost Breakdown', icon: BarChartIcon },
    { id: 'chapter5', title: 'Conclusion', icon: FlagIcon },
    { id: 'gallery', title: 'Gallery', icon: ImageIcon },
    { id: 'ai_assistant', title: 'AI Assistant', icon: SparklesIcon }
];

interface SidebarProps {
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSectionId, setActiveSectionId, isOpen, setIsOpen }) => {
  const handleItemClick = (id: string) => {
    setActiveSectionId(id);
    setIsOpen(false);
  }
  
  return (
    <aside className={`absolute top-0 left-0 h-full z-30 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold font-mono text-white">Report Generator</h2>
        <p className="text-xs text-gray-500">FYP-2026-ME</p>
      </div>
      <nav className="p-2">
        <ul>
          {SECTION_LIST.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-md text-sm transition-colors ${
                  activeSectionId === item.id
                    ? 'bg-cyan-500 text-white font-semibold'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
