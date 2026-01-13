import React, { useState } from 'react';
import { Loader2, AlertTriangle } from 'lucide-react';

const LawFirmDemo: React.FC = () => {
  const siteUrl = "https://robertlick.github.io/Dejoss-Advocacia-exemplo/";
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full min-h-[calc(100vh-60px)] flex flex-col relative bg-gray-50">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20">
          <Loader2 className="w-10 h-10 text-gold-500 animate-spin mb-4" />
          <p className="text-gray-500 font-medium">Carregando site...</p>
        </div>
      )}

      {/* Fallback Background (Visible if Iframe fails or transparent) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0">
        <AlertTriangle className="w-12 h-12 text-gray-300 mb-4" />
        <h3 className="text-xl font-bold text-gray-400 mb-2">Carregando visualização externa...</h3>
        <p className="text-gray-400 max-w-md mb-6 text-sm">
          Aguarde um momento enquanto o site é carregado.
        </p>
      </div>

      {/* Iframe */}
      <iframe 
        src={siteUrl}
        className="w-full h-full flex-1 border-0 relative z-10 bg-white"
        title="Dejoss Advocacia Site"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LawFirmDemo;