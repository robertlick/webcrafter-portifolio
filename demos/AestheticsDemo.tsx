import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Instagram, 
  Facebook,
  Twitter,
  Menu, 
  ChevronDown, 
  ArrowRight,
  Feather
} from 'lucide-react';

const AestheticsDemo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Attach to the demo scroll container if it exists, else window
    const container = document.getElementById('demo-scroll-container') || window;
    
    const handleScroll = () => {
      const offset = container instanceof Window ? container.scrollY : (container as HTMLElement).scrollTop;
      setScrolled(offset > 50);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', id: 'home' }, 
    { label: 'Tratamentos', id: 'treatments' }, 
    { label: 'A Clínica', id: 'philosophy' }, 
    { label: 'Resultados', id: 'results' }, 
    { label: 'Contato', id: 'contact' }
  ];

  return (
    // Changed bg to #111 (footer color) to prevent white flash at bottom on large screens
    // Main content uses white/light backgrounds on top of this
    <div id="home" className="font-sans bg-[#111] text-[#333] min-h-full relative flex flex-col">
      
      {/* Wrapper for Light Content Section */}
      <div className="bg-[#F9F8F6] relative z-10 rounded-b-[40px] shadow-2xl pb-10">
        
        {/* --- DECORATIVE BACKGROUND --- */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E8E0D5] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F3EFE9] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* --- NAVBAR --- */}
        <nav 
          className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
            scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm text-[#1a1a1a] border-[#e5e5e5]' : 'bg-[#F9F8F6] py-8 text-[#1a1a1a] border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 z-50 cursor-pointer"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <span className="text-2xl font-serif tracking-[0.2em] font-bold">
                LUMIÈRE
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-xs uppercase tracking-[0.15em] font-medium hover:text-[#D4AF37] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="border border-[#1a1a1a] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 active:scale-95"
              >
                Agendar
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-[#1a1a1a]">
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden pt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center relative z-10">
            
            {/* Text Content */}
            <div className="md:col-span-5 flex flex-col items-start text-left animate-in slide-in-from-left-10 fade-in duration-1000">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold">Estética Avançada</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#1a1a1a] mb-8">
                Beleza <br/>
                <span className="italic font-light text-[#555]">Atemporal</span>
              </h1>
              
              <p className="font-light text-lg md:text-xl text-[#666] leading-relaxed mb-10 max-w-md">
                A união perfeita entre ciência e arte. Protocolos exclusivos para revelar sua melhor versão com naturalidade e sofisticação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <button 
                  onClick={(e) => scrollToSection(e, 'treatments')}
                  className="bg-[#1a1a1a] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:scale-105 transition-all duration-500 shadow-xl"
                >
                  Nossos Serviços
                </button>
                <div 
                  onClick={(e) => scrollToSection(e, 'philosophy')}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500 text-[#D4AF37]">
                    <span className="text-xl">▶</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.1em] text-[#555] group-hover:text-[#D4AF37] transition-colors">Conheça o espaço</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="md:col-span-7 relative h-[50vh] md:h-[70vh] w-full animate-in zoom-in-95 fade-in duration-1000 delay-300">
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[90%] h-full overflow-hidden rounded-t-[200px] md:rounded-t-[300px] rounded-b-[10px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mulher elegante pele" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-in-out"
                />
              </div>
              
              {/* Small floating image */}
              <div className="absolute bottom-10 left-0 w-[40%] aspect-[3/4] overflow-hidden border-8 border-[#F9F8F6] shadow-xl hidden md:block">
                 <img 
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Detalhe tratamento" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Label */}
              <div className="absolute top-20 left-10 hidden md:block animate-pulse">
                 <Sparkles className="text-[#D4AF37] w-12 h-12" strokeWidth={1} />
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 cursor-pointer hover:opacity-100"
          >
            <span className="text-[10px] uppercase tracking-widest">Explore</span>
            <ChevronDown size={16} />
          </div>
        </header>

        {/* --- PHILOSOPHY SECTION --- */}
        <section id="philosophy" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Feather className="w-8 h-8 mx-auto text-[#D4AF37] mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-8 leading-tight">
              "Não buscamos transformar quem você é, mas sim <span className="italic text-[#D4AF37]">enaltecer</span> cada traço da sua singularidade."
            </h2>
            <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-8"></div>
            <p className="text-[#666] leading-relaxed font-light text-lg">
              A Lumière nasceu do desejo de oferecer uma experiência estética de alto padrão, onde o conforto e a privacidade se encontram com a mais alta tecnologia dermatológica.
            </p>
          </div>
        </section>

        {/* --- SERVICES CAROUSEL --- */}
        <section id="treatments" className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
            <div>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold block mb-2">Expertise</span>
              <h2 className="font-serif text-4xl text-[#1a1a1a]">Tratamentos Exclusivos</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-[#D4AF37] transition">
              Ver Menu Completo <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide px-6 md:px-0 md:justify-center">
            {[
              { 
                title: "Harmonização Facial", 
                img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop", 
                desc: "Equilíbrio e simetria para seus traços." 
              },
              { 
                title: "Laser Lavieen", 
                img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop", 
                desc: "O efeito BB Cream permanente." 
              },
              { 
                title: "Bioestimuladores", 
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", 
                desc: "Recupere o colágeno e a firmeza." 
              },
            ].map((service, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[350px] group cursor-pointer">
                <div className="h-[400px] w-full overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                     <div className="bg-white/90 backdrop-blur p-3 rounded-full inline-block mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <ArrowRight size={16} color="#000" />
                     </div>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-[#777] font-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- NUMBERS / SOCIAL PROOF / RESULTS --- */}
        <section id="results" className="bg-[#1a1a1a] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 mb-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
               { num: "10+", label: "Anos de Experiência" },
               { num: "5k+", label: "Pacientes Felizes" },
               { num: "15", label: "Prêmios Internacionais" },
               { num: "100%", label: "Segurança Certificada" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="font-serif text-4xl md:text-5xl text-[#D4AF37]">{stat.num}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
          {/* Fake Testimonial for Results */}
          <div className="max-w-3xl mx-auto text-center px-6">
             <div className="text-[#D4AF37] text-2xl mb-4">★★★★★</div>
             <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-gray-300">"O resultado ficou incrivelmente natural. A equipe da Lumière entendeu exatamente o que eu buscava."</p>
             <p className="mt-6 text-xs uppercase tracking-widest text-gray-500">— Mariana S., Harmonização Facial</p>
          </div>
        </section>

        {/* --- NEW: CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-[#F9F8F6] px-6">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2">
                 <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold block mb-4">Contato</span>
                 <h2 className="font-serif text-4xl text-[#1a1a1a] mb-6">Agende sua avaliação</h2>
                 <p className="text-gray-600 mb-8 font-light">Preencha o formulário abaixo e nossa concierge entrará em contato para agendar o melhor horário para você.</p>
                 
                 <div className="space-y-4 font-light text-sm">
                    <div className="flex items-center gap-4 text-[#1a1a1a]">
                       <span className="font-bold">Telefone:</span> (11) 99999-9999
                    </div>
                    <div className="flex items-center gap-4 text-[#1a1a1a]">
                       <span className="font-bold">Email:</span> contato@lumiere.com.br
                    </div>
                    <div className="flex items-center gap-4 text-[#1a1a1a]">
                       <span className="font-bold">Endereço:</span> Rua Oscar Freire, 1500 - SP
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2 bg-white p-8 shadow-xl">
                 <form className="flex flex-col gap-6">
                    <input type="text" placeholder="Nome Completo" className="border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] transition bg-transparent" />
                    <input type="email" placeholder="E-mail" className="border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] transition bg-transparent" />
                    <input type="tel" placeholder="Telefone" className="border-b border-gray-300 py-2 outline-none focus:border-[#D4AF37] transition bg-transparent" />
                    <button className="bg-[#1a1a1a] text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition duration-500 mt-4">Enviar Solicitação</button>
                 </form>
              </div>
           </div>
        </section>

      </div>

      {/* --- FOOTER --- */}
      {/* Footer is now direct child of the main container which has bg-[#111] */}
      <footer id="footer" className="bg-[#111] text-white pt-24 pb-12 relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          
          <div className="mb-10">
            <span className="text-3xl font-serif tracking-[0.2em] font-bold">LUMIÈRE</span>
          </div>

          <div className="flex gap-8 mb-12">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] transition cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] transition cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-[#D4AF37] transition cursor-pointer" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-xs uppercase tracking-[0.15em] text-gray-400 mb-16">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <a href="#" className="hover:text-white transition">Trabalhe Conosco</a>
          </div>

          <div className="w-full h-[1px] bg-[#222] mb-8"></div>

          <p className="text-[10px] text-[#444] tracking-wider">
            © 2024 Lumière Estética Avançada. São Paulo, Brasil. Design by WebCrafter.
          </p>

        </div>
      </footer>
    </div>
  );
};

export default AestheticsDemo;