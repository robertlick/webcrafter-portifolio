import React from 'react';
import { Utensils, Clock, MapPin, Phone, Instagram, Facebook, Star, ChevronRight } from 'lucide-react';

const RestaurantDemo: React.FC = () => {
  return (
    <div className="font-sans bg-[#faf9f6] text-[#2d2d2d] min-h-screen">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Utensils className="text-orange-600" size={24} />
          <span className="text-xl font-serif font-bold tracking-tighter uppercase">Bella <span className="text-orange-600">Cucina</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
          <a href="#" className="hover:text-orange-600 transition">Cardápio</a>
          <a href="#" className="hover:text-orange-600 transition">Reservas</a>
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition">
          Reservar Mesa
        </button>
      </nav>

      {/* Hero Impactante */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Delicious food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <span className="inline-block text-orange-400 font-bold uppercase tracking-[0.4em] text-xs mb-4">Autêntica Cozinha Italiana</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">Sabores <br/> Reais</h1>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition duration-500">
            Ver Cardápio
          </button>
        </div>
      </header>

      {/* Info Rápida */}
      <section className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <Clock className="text-orange-500 mb-2" />
            <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">Aberto Ter-Dom</p>
            <p className="text-sm italic">12:00 - 23:30</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-orange-500 mb-2" />
            <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">Endereço</p>
            <p className="text-sm italic">Rua Gastronômica, 123 - SP</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="text-orange-500 mb-2" />
            <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">Reservas</p>
            <p className="text-sm italic">(11) 98888-7777</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 text-center text-stone-400 text-[10px] uppercase tracking-widest">
        &copy; 2024 Bella Cucina. Site Demonstrativo WebCrafter.
      </footer>
    </div>
  );
};

export default RestaurantDemo;