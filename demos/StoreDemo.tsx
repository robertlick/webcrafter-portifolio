import React from 'react';
import { Sparkles, Flower, Star, Instagram, Phone, Gem } from 'lucide-react';

const AestheticsDemo: React.FC = () => {
  return (
    <div className="font-sans bg-[#fdfbf7] text-[#4a4a4a] min-h-screen">
      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#fde8e8] blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#fae8d4] blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-serif tracking-widest uppercase">Lumière</div>
        <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase font-light">
          <a href="#" className="hover:text-[#d4af37] transition">Início</a>
          <a href="#" className="hover:text-[#d4af37] transition">Tratamentos</a>
          <a href="#" className="hover:text-[#d4af37] transition">Sobre</a>
          <a href="#" className="hover:text-[#d4af37] transition">Contato</a>
        </div>
        <button className="border border-[#4a4a4a] px-6 py-2 uppercase text-xs tracking-[0.2em] hover:bg-[#4a4a4a] hover:text-white transition duration-500">
          Agendar
        </button>
      </nav>

      {/* Hero */}
      <header className="relative z-10 pt-12 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-6 text-[#d4af37]">
            <Sparkles size={16} />
            <span className="uppercase tracking-[0.3em] text-xs">Estética Avançada</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Rebele sua <br/> 
            <span className="italic text-[#d4af37]">beleza natural</span>
          </h1>
          <p className="font-light text-lg leading-relaxed mb-10 max-w-md text-gray-600">
            Harmonização facial, tratamentos corporais e cuidados com a pele em um ambiente luxuoso e acolhedor.
          </p>
          <button className="bg-[#1a1a1a] text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-[#d4af37] transition duration-500">
            Conhecer Procedimentos
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-t-[100px]">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
              alt="Estética Facial" 
              className="w-full h-full object-cover hover:scale-105 transition duration-1000"
            />
          </div>
          {/* Badge */}
          <div className="absolute bottom-10 -left-10 z-20 bg-white p-6 shadow-xl max-w-[200px] hidden md:block">
            <div className="flex gap-1 mb-2 text-[#d4af37]">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>
            <p className="font-serif text-lg leading-tight">"Melhor clínica da região."</p>
          </div>
        </div>
      </header>

      {/* Services Scroller */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-10 border border-[#f0f0f0] hover:border-[#d4af37] transition duration-500 group cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-[#f9f9f9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition duration-500">
                <Gem className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Harmonização</h3>
              <p className="font-light text-sm text-gray-500 leading-relaxed mb-6">
                Preenchimento, Botox e Fios de Sustentação para realçar seus traços com naturalidade.
              </p>
              <span className="text-xs uppercase tracking-widest border-b border-[#d4af37] pb-1">Saiba mais</span>
            </div>

            <div className="p-10 border border-[#f0f0f0] hover:border-[#d4af37] transition duration-500 group cursor-pointer transform md:-translate-y-8 bg-white shadow-xl">
              <div className="w-12 h-12 mx-auto bg-[#f9f9f9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition duration-500">
                <Sparkles className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Laser & Pele</h3>
              <p className="font-light text-sm text-gray-500 leading-relaxed mb-6">
                Lavieen, Microagulhamento e Peeling para uma pele radiante e rejuvenescida.
              </p>
              <span className="text-xs uppercase tracking-widest border-b border-[#d4af37] pb-1">Saiba mais</span>
            </div>

            <div className="p-10 border border-[#f0f0f0] hover:border-[#d4af37] transition duration-500 group cursor-pointer">
              <div className="w-12 h-12 mx-auto bg-[#f9f9f9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition duration-500">
                <Flower className="w-5 h-5 text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Corporal</h3>
              <p className="font-light text-sm text-gray-500 leading-relaxed mb-6">
                Protocolos exclusivos para gordura localizada, celulite e flacidez.
              </p>
              <span className="text-xs uppercase tracking-widest border-b border-[#d4af37] pb-1">Saiba mais</span>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer Minimal */}
      <footer className="bg-[#1a1a1a] text-white py-12 text-center relative z-10">
        <div className="flex justify-center gap-6 mb-8">
          <Instagram className="w-6 h-6 hover:text-[#d4af37] cursor-pointer transition" />
          <Phone className="w-6 h-6 hover:text-[#d4af37] cursor-pointer transition" />
        </div>
        <p className="font-serif text-xl mb-2">LUMIÈRE ESTÉTICA</p>
        <p className="text-xs tracking-widest text-gray-500 uppercase">São Paulo • Jardins</p>
      </footer>
    </div>
  );
};

export default AestheticsDemo;