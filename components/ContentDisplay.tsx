
import React from 'react';
import { ReportSection, ReportSectionContent } from '../types';
import { REPORT_DATA } from '../constants';
import { Card } from './ui/Card';

interface ContentDisplayProps {
  section: ReportSection;
}

const renderContent = (content: ReportSectionContent) => {
  switch (content.type) {
    case 'title_page':
      return <TitlePage />;
    case 'paragraphs':
      return (
        <div className="space-y-4 text-gray-300 leading-relaxed">
          {content.text.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      );
    case 'subsections':
      return (
        <div className="space-y-8">
          {content.items.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {item.text.map((p, j) => <p key={j}>{p}</p>)}
                {item.list && (
                  <ul className="list-disc list-inside pl-4 space-y-2 mt-4">
                    {item.list.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    case 'gallery':
        return <ImageGallery images={content.images} />;
    case 'table':
        return <DataTable headers={content.headers} rows={content.rows} />;
    default:
      return <div>Unsupported content type.</div>;
  }
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ section }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold font-mono text-white tracking-tighter">{section.title}</h2>
        {section.description && <p className="text-lg text-gray-400 mt-2">{section.description}</p>}
      </header>
      <Card className="bg-gray-900/50 backdrop-blur-sm">
        {renderContent(section.content)}
      </Card>
    </article>
  );
};

const TitlePage: React.FC = () => (
    <div className="text-center flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{REPORT_DATA.title}</h1>
        <div className="my-8">
            <p className="text-lg text-gray-300">By:</p>
            <ul className="text-md text-cyan-400 space-y-1 mt-2">
                {REPORT_DATA.authors.map(author => <li key={author}>{author}</li>)}
            </ul>
        </div>
        <div className="mt-8 text-gray-400">
            <p><span className="font-semibold">Supervisor:</span> {REPORT_DATA.supervisor}</p>
            <p>{REPORT_DATA.department}</p>
            <p>{REPORT_DATA.institution}</p>
            <p>Session: {REPORT_DATA.session}</p>
        </div>
    </div>
);

const ImageGallery: React.FC<{images: {src:string, caption: string}[]}> = ({images}) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden group">
                <img src={image.src} alt={image.caption} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4 bg-gray-800">
                    <p className="text-sm text-gray-300 text-center">{image.caption}</p>
                </div>
            </div>
        ))}
    </div>
);

const DataTable: React.FC<{headers: string[], rows: (string|number)[][]}> = ({headers, rows}) => (
    <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                <tr>
                    {headers.map((header, i) => (
                        <th key={i} scope="col" className="px-6 py-3">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="bg-gray-900 border-b border-gray-800 hover:bg-gray-800/50">
                        {row.map((cell, j) => (
                            <td key={j} className="px-6 py-4">{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
