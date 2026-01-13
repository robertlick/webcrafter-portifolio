import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface DemoViewerProps {
  component: React.ComponentType;
  title: string;
  onClose: () => void;
}

const DemoViewer: React.FC<DemoViewerProps> = ({ component: Component, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
      {/* Top Bar simulating browser or system bar */}
      <div className="bg-gray-800 text-white p-3 flex justify-between items-center shadow-md shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-md transition"
          >
            <X size={16} />
            Fechar Demo
          </button>
          <div className="h-6 w-px bg-gray-600 mx-2"></div>
          <span className="font-semibold text-sm hidden sm:block">Visualizando: <span className="text-blue-400">{title}</span></span>
        </div>

        {/* Right side controls (Button removed as requested) */}
        <div className="flex items-center gap-4">
          {/* Placeholder for future controls if needed */}
        </div>
      </div>

      {/* Demo Content Area */}
      {/* Added ID demo-scroll-container for demos to attach scroll listeners */}
      <div id="demo-scroll-container" className="flex-1 overflow-auto bg-white animate-in fade-in duration-300 relative">
        <Component />
      </div>
    </div>
  );
};

export default DemoViewer;