import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
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
  X,
  ArrowRight,
  Search,
  CheckCircle2,
  Star,
  Clock,
  MapPin,
  Activity,
  User,
  Feather,
  Flower,
  Gem,
  Wind
} from 'lucide-react';

// --- COMPONENTES DOS SITES INTEGRADOS (DEMOS) ---

const LawFirmDemo = () => (
  <div className="font-serif bg-[#0a0a0a] text-white min-h-screen">
    <nav className="p-6 flex justify-between items-center border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Scale className="text-[#d4af37]" />
        <span className="tracking-[0.3em] font-bold text-sm">DEJOSS ADVOCACIA</span>
      </div>
      <button className="bg-[#d4af37] text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition">Agendar Consulta</button>
    </nav>
    <div className="relative h-[80vh] flex items-center px-10 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2069&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-6xl md:text-8xl mb-6 leading-tight">Justiça com <br/><span className="text-[#d4af37] italic">Excelência</span></h1>
        <p className="text-xl text-gray-300 mb-8 font-sans font-light">Defesa estratégica e compromisso inabalável com seus direitos.</p>
        <button className="border-2 border-[#d4af37] text-[#d4af37] px-10 py-4 font-sans font-bold hover:bg-[#d4af37] hover:text-black transition">Nossas Áreas</button>
      </div>
    </div>
    <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-3 gap-10 bg-zinc-900">
      {['Direito Civil', 'Empresarial', 'Trabalhista'].map(area => (
        <div key={area} className="p-10 border border-white/5 group hover:bg-[#d4af37] transition-all duration-500">
          <h3 className="text-2xl mb-4 group-hover:text-black transition">{area}</h3>
          <p className="text-gray-400 group-hover:text-black/80 transition font-sans text-sm">Consultoria especializada com foco em resultados sólidos e segurança jurídica.</p>
        </div>
      ))}
    </div>
  </div>
);

const ClinicDemo = () => (
  <div className="font-sans bg-slate-50 text-slate-600 min-h-screen">
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100 px-6 h-20 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg"><HeartPulse size={24} /></div>
        <span className="text-xl font-bold text-slate-800">Vita<span className="text-teal-600">Clinic</span></span>
      </div>
      <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-teal-700 transition">Agendar Agora</button>
    </nav>
    <div className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">Sua saúde em <br/><span className="text-teal-500">boas mãos.</span></h1>
        <p className="text-lg text-slate-500 mb-8 max-w-lg">Atendimento humanizado e tecnologia de ponta para cuidar de quem você ama.</p>
        <div className="flex gap-4"><button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg">Ver Especialidades</button></div>
      </div>
      <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full" />
    </div>
  </div>
);

const AestheticsDemo = () => (
  <div className="font-sans bg-[#F9F8F6] text-[#1a1a1a] min-h-screen">
    <nav className="py-8 px-8 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <span className="text-2xl font-serif tracking-[0.3em] font-bold">LUMIÈRE</span>
      <button className="border border-[#1a1a1a] px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1a1a1a] hover:text-white transition">Agendar</button>
    </nav>
    <div className="max-w-7xl mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="order-2 md:order-1">
        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" className="rounded-t-[200px] shadow-2xl h-[600px] w-full object-cover" />
      </div>
      <div className="order-1 md:order-2">
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Estética de Luxo</span>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-8">Beleza <br/><span className="italic font-light text-gray-400">Atemporal</span></h1>
        <p className="text-lg text-gray-500 font-light mb-10 max-w-sm">Protocolos exclusivos desenhados para realçar sua melhor versão.</p>
        <button className="bg-[#1a1a1a] text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold">Ver Procedimentos</button>
      </div>
    </div>
  </div>
);

// --- COMPONENTES DO PORTFÓLIO PRINCIPAL ---

const DemoViewer = ({ component: Component, title, onClose }: any) => (
  <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300">
    <div className="bg-slate-900 text-white p-4 flex justify-between items-center shrink-0">
      <button onClick={onClose} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition">
        <X size={18} /> Fechar Demonstração
      </button>
      <span className="font-bold text-sm hidden sm:block">Projeto: <span className="text-blue-400">{title}</span></span>
    </div>
    <div className="flex-1 overflow-auto"><Component /></div>
  </div>
);

const PortfolioApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const demos = [
    {
      id: 'lawfirm',
      name: "Dejoss Advocacia",
      category: "Advocacia & Jurídico",
      description: "Site institucional que transmite autoridade e confiança. Ideal para escritórios de advocacia e consultoria.",
      image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2069&auto=format&fit=crop",
      component: LawFirmDemo
    },
    {
      id: 'clinic',
      name: "VitaClinic",
      category: "Saúde & Clínicas",
      description: "Design limpo e acolhedor focado na experiência do paciente e facilidade de agendamento.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      component: ClinicDemo
    },
    {
      id: 'aesthetics',
      name: "Lumière Estética",
      category: "Estética & Beleza",
      description: "Visual luxuoso e minimalista que valoriza imagens de alta qualidade. Perfeito para SPAs e Clínicas.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      component: AestheticsDemo
    }
  ];

  if (activeDemo) return <DemoViewer component={activeDemo.component} title={activeDemo.name} onClose={() => setActiveDemo(null)} />;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar Ilha */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        <nav className={`pointer-events-auto flex items-center justify-between transition-all duration-700 rounded-2xl md:rounded-full border ${isScrolled || mobileMenuOpen ? 'w-[92%] md:w-[70%] bg-white/80 backdrop-blur-xl shadow-2xl border-white/40 py-2.5 px-6' : 'w-[95%] md:w-[85%] bg-white/30 backdrop-blur-md border-transparent py-5 px-8'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"><Code2 size={24} /></div>
            <span className="text-xl font-black tracking-tight group-hover:text-blue-600 transition-colors">WebCrafter</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scrollToSection('portfolio')} className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600">Portfólio</button>
            <button onClick={() => scrollToSection('process')} className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600">Processo</button>
            <button onClick={() => scrollToSection('contact')} className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600">Contato</button>
            <button onClick={() => scrollToSection('contact')} className="ml-4 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-600 transition-all active:scale-95">Começar Projeto</button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-xs font-black uppercase tracking-widest mb-8">
            <Code2 size={16} /> <span>Desenvolvimento Web Especializado</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1]">Sua marca merece um <span className="text-blue-600">Site de Alto Nível</span></h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl font-medium">Não fazemos apenas sites. Criamos ferramentas de vendas poderosas com design premium.</p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button onClick={() => scrollToSection('portfolio')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">Ver Projetos <ChevronRight className="group-hover:translate-x-1" /></button>
            <button onClick={() => scrollToSection('contact')} className="bg-white border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:border-blue-400 hover:text-blue-600 transition-all">Comece o seu projeto</button>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Portfólio Premium</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Cada projeto é único, desenhado sob medida para converter visitantes em clientes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {demos.map((demo) => (
            <div key={demo.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:-translate-y-4 transition-all duration-500">
              <div className="h-64 relative overflow-hidden cursor-pointer" onClick={() => setActiveDemo(demo)}>
                <img src={demo.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/40 transition-all" />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1 rounded-full w-fit">{demo.category}</span>
                <h3 className="text-3xl font-black mb-4">{demo.name}</h3>
                <p className="text-slate-500 mb-8 flex-1 text-base leading-relaxed">{demo.description}</p>
                <button onClick={() => setActiveDemo(demo)} className="w-full py-5 md:py-4.5 rounded-2xl bg-slate-900 text-white font-black text-xl md:text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                  Ver Projeto Completo <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section id="process" className="py-32 bg-slate-900 text-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-24">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Briefcase, title: "Briefing", desc: "Entendemos seu negócio e objetivos." },
              { icon: Palette, title: "Criação", desc: "Desenvolvemos o layout e a tecnologia." },
              { icon: Send, title: "Entrega", desc: "Seu site pronto para vender." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-slate-800 rounded-3xl flex items-center justify-center mb-8 text-blue-400 border border-slate-700"><step.icon size={40} /></div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-slate-400 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-32">
        <div className="bg-blue-600 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Vamos construir <br/> algo incrível?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-16 font-medium">O próximo passo para o sucesso do seu negócio começa aqui.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://wa.me/5521984125259" target="_blank" className="bg-white/10 p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center group">
              <MessageCircle size={32} className="mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-black text-lg">WhatsApp</span>
            </a>
            <a href="https://instagram.com/rd.webcrafter" target="_blank" className="bg-white/10 p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center group">
              <Instagram size={32} className="mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-black text-lg">Instagram</span>
            </a>
            <a href="mailto:robertfdejoss.webcrafter@gmail.com" className="bg-white/10 p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center group">
              <Mail size={32} className="mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-black text-lg">E-mail</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        &copy; 2024 WEBCRAFTER DIGITAL EXCELLENCE. TODOS OS DIREITOS RESERVADOS.
      </footer>
    </div>
  );
};

// Renderização
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<React.StrictMode><PortfolioApp /></React.StrictMode>);
}
