import React, { useState } from 'react';
import { Briefcase, Palette, Send } from 'lucide-react';
import { DemoSite, Step } from './types';
import PortfolioHome from './components/PortfolioHome';
import DemoViewer from './components/DemoViewer';
import LawFirmDemo from './demos/LawFirmDemo';
import ClinicDemo from './demos/ClinicDemo';
import AestheticsDemo from './demos/AestheticsDemo';

// Data Configuration
const demoSites: DemoSite[] = [
  {
    id: 'lawfirm',
    name: "Dejoss Advocacia",
    category: "Advocacia & Jurídico",
    description: "Site institucional que transmite autoridade e confiança. Ideal para escritórios de advocacia e consultoria jurídica.",
    // Image used as background for the Mini-Hero
    image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2069&auto=format&fit=crop",
    component: LawFirmDemo
  },
  {
    id: 'clinic',
    name: "VitaClinic",
    category: "Saúde & Clínicas",
    description: "Design limpo e acolhedor focado na experiência do paciente, com facilidade de agendamento e apresentação do corpo clínico.",
    // Image used in the split view of Mini-Hero
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    component: ClinicDemo
  },
  {
    id: 'aesthetics',
    name: "Lumière Estética",
    category: "Estética & Beleza",
    description: "Visual luxuoso e minimalista que valoriza imagens de alta qualidade. Perfeito para clínicas de estética, spas e salões.",
    // Image used in the arch view of Mini-Hero
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    component: AestheticsDemo
  }
];

const steps: Step[] = [
  {
    id: 1,
    title: "Briefing",
    description: "Conversamos para entender seu negócio, público-alvo e objetivos principais.",
    icon: Briefcase
  },
  {
    id: 2,
    title: "Criação",
    description: "Desenvolvemos o layout, conteúdo e programamos o site com as melhores tecnologias.",
    icon: Palette
  },
  {
    id: 3,
    title: "Entrega",
    description: "Entregamos seu site completo com design exclusivo, textos estratégicos e animações modernas, totalmente pronto para o lançamento.",
    icon: Send
  }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');

  const handleViewDemo = (id: string) => {
    setCurrentView(id);
    // Scroll to top when opening a demo
    window.scrollTo(0, 0);
  };

  const handleCloseDemo = () => {
    setCurrentView('home');
  };

  // Determine what to render
  const activeDemo = demoSites.find(d => d.id === currentView);

  return (
    <div className="antialiased text-gray-900 bg-white">
      {activeDemo ? (
        <DemoViewer 
          component={activeDemo.component} 
          title={activeDemo.name} 
          onClose={handleCloseDemo} 
        />
      ) : (
        <PortfolioHome 
          demos={demoSites} 
          steps={steps} 
          onViewDemo={handleViewDemo} 
        />
      )}
    </div>
  );
};

export default App;