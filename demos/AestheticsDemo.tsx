import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Instagram, 
  Facebook,
  Menu, 
  ArrowRight,
  Feather,
  Flower,
  Gem,
  Wind
} from 'lucide-react';

const AestheticsDemo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById('demo-scroll-container') || window;
    const handleScroll = () => {
      const offset = container instanceof Window ? container.scrollY : (container as HTMLElement).scrollTop;
      setScrolled(offset > 50);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      title: "Harmonização Facial", 
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop", 
      desc: "Equilíbrio e simetria para seus traços com naturalidade.",
      icon: Gem
    },
    { 
      title: "Laser Lavieen", 
      img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop", 
      desc: "Tecnologia de ponta para uma pele radiante e sem manchas.",
      icon: Sparkles
    },
    { 
      title: "Bioestimuladores", 
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", 
      desc: "Recupere o colágeno e a firmeza da sua pele.",
      icon: Feather
    },
    { 
      title: "Peeling de Diamante", 
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop", 
      desc: "Renovação celular profunda para uma textura aveludada.",
      icon: Flower
    },
    { 
      title: "Drenagem Linfática", 
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070&auto=format&fit=crop", 
      desc: "Desintoxicação e relaxamento para o bem-estar do corpo.",
      icon: Wind
    }
  ];

  return (
    <div className="font-sans bg-[#111] text-[#333] min-h-full relative flex flex-col">
      <div className="bg-[#F9F8F6] relative z-10 rounded-b-[40px] shadow-2xl pb-10">
        
        {/* Navbar */}
        <nav className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-[#e5e5e5]' : 'bg-[#F9F8F6] py-8 border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-serif tracking-[0.2em] font-bold text-[#1a1a1a]">LUMIÈRE</span>
            </div>
            <div className="hidden md:flex items-center gap-12">
              {['Início', 'Tratamentos', 'A Clínica', 'Contato'].map((label) => (
                <a key={label} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#D4AF37] transition-colors">{label}</a>
              ))}
            </div>
            <button className="border border-[#1a1a1a] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all">Agendar</button>
          </div>
        </nav>

        {/* Hero */}
        <header className="relative min-h-[85vh] flex items-center px-6 pt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
            <div className="md:col-span-5 text-left animate-in slide-in-from-left-10 duration-1000">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold">Estética de Luxo</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-[#1a1a1a] mb-8">
                Beleza <br/> <span className="italic font-light text-[#777]">Atemporal</span>
              </h1>
              <p className="font-light text-lg text-[#666] mb-10 max-w-sm">Protocolos exclusivos que unem ciência e arte para realçar sua essência única.</p>
              <button className="bg-[#1a1a1a] text-white px-10 py-5 text-xs uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all shadow-2xl">Explorar Procedimentos</button>
            </div>
            <div className="md:col-span-7 h-[60vh] md:h-[75vh] relative">
              <div className="absolute inset-0 overflow-hidden rounded-t-[300px] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Treatments Section */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-16">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">Procedimentos</span>
            <h2 className="font-serif text-4xl text-[#1a1a1a]">Nossa Expertise</h2>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide px-4">
            {services.map((service, idx) => (
              <div key={idx} className="min-w-[320px] md:min-w-[400px] group cursor-pointer bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500 rounded-b-xl">
                <div className="h-[450px] w-full overflow-hidden mb-6 relative rounded-t-lg">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-[#D4AF37] shadow-lg">
                    <service.icon size={20} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-[#777] font-light text-sm leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1a1a1a] group-hover:gap-4 transition-all">
                  Saber mais <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Feather className="w-8 h-8 mx-auto text-[#D4AF37] mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-8 italic leading-tight italic">
              "A beleza é o equilíbrio entre o que você sente por dentro e o que o mundo vê por fora."
            </h2>
          </div>
        </section>
      </div>

      <footer className="bg-[#111] text-white py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <span className="text-3xl font-serif tracking-[0.3em] font-bold mb-12">LUMIÈRE</span>
          <div className="flex gap-8 mb-12">
            <Instagram className="hover:text-[#D4AF37] cursor-pointer transition" />
            <Facebook className="hover:text-[#D4AF37] cursor-pointer transition" />
          </div>
          <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">© 2024 Lumière Estética Avançada. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default AestheticsDemo;