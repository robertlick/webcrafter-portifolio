import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Palette, 
  Send, 
  MessageCircle, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Code2,
  ExternalLink,
  Scale,
  HeartPulse,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { DemoSite, Step } from '../types';

interface PortfolioHomeProps {
  demos: DemoSite[];
  steps: Step[];
  onViewDemo: (id: string) => void;
}

const PortfolioHome: React.FC<PortfolioHomeProps> = ({ demos, steps, onViewDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // Helper function to render the specific "Mini Hero" look for each site
  const renderThumbnail = (demo: DemoSite) => {
    if (demo.id === 'lawfirm') {
      return (
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <img src={demo.image} alt={demo.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
          
          {/* Content mimicry */}
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Scale className="text-[#d4af37]" size={20} />
              <div className="text-left leading-none">
                <span className="block text-white font-serif tracking-widest text-[10px] font-bold">DEJOSS</span>
                <span className="block text-[#d4af37] text-[8px] tracking-[0.2em] uppercase">Advocacia</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl text-white leading-tight drop-shadow-lg">
              Justiça com <br/>
              <span className="text-[#d4af37] italic font-light">Excelência</span>
            </h3>
            <div className="mt-4 w-8 h-[1px] bg-[#d4af37] mx-auto"></div>
          </div>
        </div>
      );
    }

    if (demo.id === 'clinic') {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-white to-teal-50 flex items-center overflow-hidden">
          {/* Left Content */}
          <div className="w-1/2 h-full p-5 flex flex-col justify-center z-10">
             <div className="flex items-center gap-1.5 mb-2">
                <div className="p-1 bg-teal-500 rounded text-white">
                  <HeartPulse size={10} />
                </div>
                <span className="font-bold text-slate-800 text-[10px]">Vita<span className="text-teal-500">Clinic</span></span>
             </div>
             <h3 className="font-bold text-slate-900 text-lg leading-[1.1] mb-2">
               Sua saúde merece <br/>
               <span className="text-teal-500">atenção total.</span>
             </h3>
             <div className="px-3 py-1 bg-teal-600 text-white text-[8px] font-bold rounded-full w-max mt-1">
               Agendar Online
             </div>
          </div>
          {/* Right Image */}
          <div className="absolute right-0 top-0 h-full w-[55%]">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
            <img src={demo.image} alt={demo.name} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      );
    }

    if (demo.id === 'aesthetics') {
      return (
        <div className="relative w-full h-full bg-[#F9F8F6] flex items-center overflow-hidden">
           {/* Decorative Blur */}
           <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-[#d4af37]/20 rounded-full blur-xl"></div>

           {/* Content */}
           <div className="w-[55%] h-full p-6 flex flex-col justify-center z-10 pl-8">
              <div className="flex items-center gap-1 text-[#d4af37] mb-2">
                <Sparkles size={10} />
                <span className="text-[6px] uppercase tracking-[0.2em] font-bold">Estética</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1a1a1a] leading-[0.9] mb-3">
                Beleza <br/>
                <span className="italic text-gray-500 font-light">Atemporal</span>
              </h3>
              <div className="border border-[#1a1a1a] px-3 py-1 text-[8px] uppercase tracking-widest w-max">
                Conheça
              </div>
           </div>

           {/* Image Arch */}
           <div className="absolute right-0 top-0 h-full w-[45%]">
             <img src={demo.image} alt={demo.name} className="w-full h-full object-cover rounded-l-[40px] shadow-lg" />
           </div>
        </div>
      );
    }

    // Fallback for any other added later
    return <img src={demo.image} alt={demo.name} className="w-full h-full object-cover" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* MAIN NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-2' : 'bg-white/0 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('top')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">WebCrafter</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Portfólio', id: 'portfolio' },
              { name: 'Como Funciona', id: 'process' },
              { name: 'Contato', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-xl p-4 flex flex-col gap-2">
              {[
              { name: 'Portfólio', id: 'portfolio' },
              { name: 'Como Funciona', id: 'process' },
              { name: 'Contato', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-3 px-4 rounded-lg hover:bg-slate-50 text-slate-600 font-semibold"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white py-3 rounded-lg font-bold mt-2"
            >
              Solicitar Orçamento
            </button>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section id="top" className="relative overflow-hidden bg-white pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 skew-x-12 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Code2 size={16} />
              <span>Desenvolvimento Web Especializado</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Criação de Sites Profissionais para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empresas e Negócios</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Transforme visitantes em clientes com um site moderno, rápido e otimizado para celulares. Design exclusivo que valoriza sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Ver Projetos <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Portfólio Selecionado</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja exemplos reais de como podemos elevar a presença digital do seu negócio. 
            Clique em "Ver site" para navegar em uma demonstração interativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <div key={demo.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
              
              {/* Image/Mini-Hero Container - Now Clickable */}
              <div 
                className="relative overflow-hidden h-56 cursor-pointer border-b border-slate-100"
                onClick={() => onViewDemo(demo.id)}
              >
                {/* Render the custom Mini-Hero */}
                {renderThumbnail(demo)}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <button className="text-white font-semibold tracking-wide border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Visualizar Site Completo
                  </button>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{demo.category}</div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{demo.name}</h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{demo.description}</p>
                <button 
                  onClick={() => onViewDemo(demo.id)}
                  className="w-full py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Ver site
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-slate-400">Processo simplificado e transparente, do início ao fim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 border-t border-dashed border-slate-600 z-0"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl shadow-blue-900/10 group hover:border-blue-500 transition-colors duration-300 relative">
                    <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    {/* Updated Badge Alignment */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Entre em contato hoje mesmo e vamos discutir como um site profissional pode ajudar seu negócio a crescer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <a 
                href="https://wa.me/5521984125259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group"
              >
                <MessageCircle className="w-8 h-8 mb-3 text-green-400" />
                <span className="font-bold text-lg">WhatsApp</span>
                <span className="text-sm text-blue-200 mt-1">Resposta Imediata</span>
              </a>
              
              <a 
                href="https://instagram.com/rd.webcrafter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group"
              >
                <Instagram className="w-8 h-8 mb-3 text-pink-400" />
                <span className="font-bold text-lg">Instagram</span>
                <span className="text-sm text-blue-200 mt-1">Conexão & Portfólio</span>
              </a>

              <a 
                href="mailto:robertfdejoss.webcrafter@gmail.com"
                className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group"
              >
                <Mail className="w-8 h-8 mb-3 text-yellow-400" />
                <span className="font-bold text-lg">E-mail</span>
                <span className="text-sm text-blue-200 mt-1">Orçamento Personalizado</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-12 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; {new Date().getFullYear()} WebCrafter - Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-600">Termos</a>
          <a href="#" className="hover:text-blue-600">Privacidade</a>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;