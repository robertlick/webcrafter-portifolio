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
import { DemoSite, Step } from '../types.ts';

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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const renderThumbnail = (demo: DemoSite) => {
    if (demo.id === 'lawfirm') {
      return (
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <img src={demo.image} alt={demo.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
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
          </div>
        </div>
      );
    }

    if (demo.id === 'clinic') {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-white to-teal-50 flex items-center overflow-hidden">
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
          </div>
          <div className="absolute right-0 top-0 h-full w-[55%]">
            <img src={demo.image} alt={demo.name} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      );
    }

    if (demo.id === 'aesthetics') {
      return (
        <div className="relative w-full h-full bg-[#F9F8F6] flex items-center overflow-hidden">
           <div className="w-[55%] h-full p-6 flex flex-col justify-center z-10 pl-8">
              <div className="flex items-center gap-1 text-[#d4af37] mb-2">
                <Sparkles size={10} />
                <span className="text-[6px] uppercase tracking-[0.2em] font-bold">Estética</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1a1a1a] leading-[0.9] mb-3">
                Beleza <br/>
                <span className="italic text-gray-500 font-light">Atemporal</span>
              </h3>
           </div>
           <div className="absolute right-0 top-0 h-full w-[45%]">
             <img src={demo.image} alt={demo.name} className="w-full h-full object-cover rounded-l-[40px] shadow-lg" />
           </div>
        </div>
      );
    }

    return <img src={demo.image} alt={demo.name} className="w-full h-full object-cover" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar Principal Estilo 'Ilha Flutuante' */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <nav className={`
          pointer-events-auto
          flex items-center justify-between
          transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          rounded-2xl md:rounded-full border
          ${isScrolled || mobileMenuOpen 
            ? 'w-[92%] md:w-[70%] max-w-4xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-white/40 py-2.5 px-5 md:px-8 translate-y-2' 
            : 'w-[95%] md:w-[85%] max-w-6xl bg-white/30 backdrop-blur-md border-transparent py-5 px-6 md:px-10 translate-y-0'}
        `}>
          <div 
            className="flex items-center gap-3 cursor-pointer group shrink-0" 
            onClick={() => scrollToSection('top')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code2 size={24} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">WebCrafter</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { name: 'Portfólio', id: 'portfolio' }, 
              { name: 'Processo', id: 'process' }, 
              { name: 'Contato', id: 'contact' }
            ].map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-all rounded-full hover:bg-blue-50/80 relative group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-blue-100/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            ))}
            <div className="w-px h-6 bg-slate-200/50 mx-4"></div>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-black hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/30 active:scale-95 hover:-translate-y-0.5"
            >
              Começar Projeto
            </button>
          </div>

          {/* Toggle Mobile */}
          <button 
            className={`md:hidden p-2 rounded-xl transition-colors ${mobileMenuOpen ? 'bg-slate-100 text-blue-600' : 'text-slate-900 hover:bg-slate-100'}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Menu Mobile Overlay (Estilo Card Flutuante) */}
      <div className={`
        fixed inset-x-4 top-24 z-[55] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-100 md:hidden transition-all duration-500 ease-spring
        ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center gap-6 p-8">
          <button onClick={() => scrollToSection('top')} className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors w-full py-2">Início</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors w-full py-2">Portfólio</button>
          <button onClick={() => scrollToSection('process')} className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors w-full py-2">Como Funciona</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors w-full py-2">Contato</button>
          <div className="w-full h-px bg-slate-100 my-2"></div>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/30 active:scale-95"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section id="top" className="relative overflow-hidden bg-white pt-40 pb-24 scroll-mt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/40 border border-blue-200/50 text-blue-700 text-xs font-black uppercase tracking-widest mb-8 animate-fade-in">
              <Code2 size={16} />
              <span>Desenvolvimento Web Especializado</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1]">
              Sua marca merece um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient">Site de Alto Nível</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-medium">
              Não fazemos apenas sites. Criamos ferramentas de vendas poderosas com design premium e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={() => scrollToSection('portfolio')} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-3 group">
                Ver Projetos <ChevronRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-white border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-700 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center">
                Comece o seu projeto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Portfólio Premium</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Cada projeto é único, desenhado sob medida para converter visitantes em clientes fiéis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {demos.map((demo) => (
            <div key={demo.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.15)] transition-all duration-700 border border-slate-100 flex flex-col h-full hover:-translate-y-4">
              <div className="relative overflow-hidden h-64 cursor-pointer border-b border-slate-50" onClick={() => onViewDemo(demo.id)}>
                {renderThumbnail(demo)}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center z-20">
                  <button className="text-white font-black tracking-widest bg-white/20 border-2 border-white/50 px-8 py-3 rounded-2xl hover:bg-white hover:text-blue-900 transition-all transform translate-y-8 group-hover:translate-y-0">
                    ACESSAR DEMO
                  </button>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 bg-blue-50 w-fit px-3 py-1 rounded-full">{demo.category}</div>
                <h3 className="text-3xl font-black mb-4 text-slate-900">{demo.name}</h3>
                <p className="text-slate-500 mb-8 flex-1 text-base leading-relaxed font-medium">{demo.description}</p>
                <button onClick={() => onViewDemo(demo.id)} className="w-full py-5 md:py-4.5 rounded-[1.25rem] bg-slate-900 text-white font-black text-xl md:text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group/btn hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98]">
                  Ver Projeto Completo <ExternalLink size={20} className="md:size-[18px] group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-slate-900 text-white relative overflow-hidden scroll-mt-32">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">O Caminho do Sucesso</h2>
            <p className="text-xl text-slate-400 font-medium">Transparência e excelência em cada etapa do desenvolvimento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-700 z-0"></div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-[2.5rem] bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-10 shadow-2xl group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-all duration-500 relative">
                    <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div className="absolute -top-5 -right-5 w-12 h-12 rounded-2xl bg-blue-600 border-4 border-slate-900 flex items-center justify-center font-black text-lg shadow-2xl">0{index + 1}</div>
                  </div>
                  <h3 className="text-2xl font-black mb-5 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-lg text-slate-400 max-w-xs leading-relaxed font-medium">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-32">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4rem] p-10 md:p-24 text-center text-white shadow-[0_50px_100px_-20px_rgba(37,99,235,0.4)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 relative z-10 leading-tight">Sua visão merece <br className="hidden md:block" /> se tornar realidade.</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-3xl mx-auto font-medium relative z-10 opacity-90 leading-relaxed">Não perca mais tempo com sites amadores. Vamos construir a autoridade digital que sua marca exige.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
             <a href="https://wa.me/5521984125259" target="_blank" className="group flex flex-col items-center p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] hover:bg-white/20 transition-all border border-white/10 hover:border-white/40 hover:-translate-y-2">
                <div className="p-5 bg-white/10 rounded-2xl mb-5 group-hover:scale-110 transition-transform"><MessageCircle size={32} /></div>
                <span className="font-black text-lg tracking-wide">WhatsApp</span>
                <span className="text-xs text-blue-200 mt-2 font-bold uppercase tracking-widest">Resposta Imediata</span>
             </a>
             <a href="https://instagram.com/rd.webcrafter" target="_blank" className="group flex flex-col items-center p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] hover:bg-white/20 transition-all border border-white/10 hover:border-white/40 hover:-translate-y-2">
                <div className="p-5 bg-white/10 rounded-2xl mb-5 group-hover:scale-110 transition-transform"><Instagram size={32} /></div>
                <span className="font-black text-lg tracking-wide">Instagram</span>
                <span className="text-xs text-blue-200 mt-2 font-bold uppercase tracking-widest">Siga nosso trabalho</span>
             </a>
             <a href="mailto:robertfdejoss.webcrafter@gmail.com" className="group flex flex-col items-center p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] hover:bg-white/20 transition-all border border-white/10 hover:border-white/40 hover:-translate-y-2">
                <div className="p-5 bg-white/10 rounded-2xl mb-5 group-hover:scale-110 transition-transform"><Mail size={32} /></div>
                <span className="font-black text-lg tracking-wide">E-mail</span>
                <span className="text-xs text-blue-200 mt-2 font-bold uppercase tracking-widest">Orçamentos Formais</span>
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 cursor-pointer" onClick={() => scrollToSection('top')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900">WebCrafter</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">&copy; 2024 WebCrafter Digital Excellence. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Estilos Globais Customizados via Style Tag (para Tailwind) */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ease-spring {
          transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default PortfolioHome;