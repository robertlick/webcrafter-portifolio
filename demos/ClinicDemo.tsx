import React, { useState } from 'react';
import { 
  HeartPulse, 
  Calendar, 
  Clock, 
  MapPin, 
  Activity, 
  Phone, 
  User, 
  Search, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const ClinicDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Especialidades', id: 'specialties' },
    { label: 'Corpo Clínico', id: 'doctors' },
    { label: 'Convênios', id: 'insurance' },
    { label: 'Unidades', id: 'units' }
  ];

  return (
    <div id="top" className="font-sans bg-slate-50 text-slate-600 min-h-screen selection:bg-teal-500 selection:text-white">
      
      {/* --- TOP BAR --- */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Phone size={12} /> (11) 3456-7890</span>
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Clock size={12} /> Seg-Sex: 07h às 20h</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Portal do Paciente</a>
          <a href="#" className="hover:text-white transition">Resultados de Exames</a>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => scrollToSection(e, 'top')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
              <HeartPulse size={24} />
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-bold text-slate-800 tracking-tight">Vita<span className="text-teal-600">Clinic</span></span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Saúde Integrada</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="relative group py-2"
              >
                <span className="group-hover:text-teal-600 transition-colors">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-teal-600 transition hover:bg-slate-50 rounded-full">
              <Search size={20} />
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'footer')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm active:scale-95"
            >
              <Calendar size={16} /> Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-slate-600 font-medium py-2 border-b border-slate-50 hover:text-teal-600"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={(e) => scrollToSection(e, 'footer')}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold mt-2 hover:bg-teal-700 transition"
              >
                Agendar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-0"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Medicina de Excelência
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Sua saúde merece <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">atenção total.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Unimos tecnologia de ponta e atendimento humanizado para cuidar de você e da sua família em todas as fases da vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={(e) => scrollToSection(e, 'footer')}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2 group"
              >
                Agendar Online
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2">
                <Phone size={18} /> (11) 3456-7890
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-teal-500" size={18} /> Convênios
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-teal-500" size={18} /> Emergência 24h
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-teal-500" size={18} /> Telemedicina
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center animate-in zoom-in-95 fade-in duration-1000 delay-200">
            {/* Main Image */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Médica atendendo" 
                className="w-full h-full object-cover max-h-[500px] lg:max-h-full hover:scale-105 transition duration-1000"
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce hover:pause">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <User size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">+15.000</p>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Pacientes Atendidos</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-xl z-20 animate-pulse">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-xs font-bold text-slate-700 mt-1 text-center">Top Rated Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- QUICK INFO BAR --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-slate-100">
           {[
             { icon: Clock, title: "Horários Flexíveis", desc: "Abertos inclusive aos sábados e feriados." },
             { icon: MapPin, title: "Localização", desc: "Fácil acesso no centro, com estacionamento." },
             { icon: Activity, title: "Exames Rápidos", desc: "Laboratório próprio com resultados digitais." }
           ].map((feature, idx) => (
             <div key={idx} className="flex items-start gap-4 group cursor-default">
               <div className="p-4 bg-slate-50 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                 <feature.icon size={28} />
               </div>
               <div>
                 <h3 className="font-bold text-lg text-slate-800 mb-1">{feature.title}</h3>
                 <p className="text-sm text-slate-500">{feature.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- SPECIALTIES GRID --- */}
      <section id="specialties" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Áreas de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Especialidades Médicas</h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Cardiologia', icon: Activity },
            { name: 'Pediatria', icon: User },
            { name: 'Dermatologia', icon: Star },
            { name: 'Ortopedia', icon: CheckCircle2 },
            { name: 'Ginecologia', icon: HeartPulse },
            { name: 'Oftalmologia', icon: Search },
            { name: 'Nutrição', icon: CheckCircle2 },
            { name: 'Psicologia', icon: User }
          ].map((spec, idx) => (
            <div key={idx} className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <spec.icon size={28} />
              </div>
              <h3 className="font-bold text-slate-700 text-lg group-hover:text-teal-700 transition-colors">{spec.name}</h3>
              <p className="text-xs text-slate-400 mt-2">Saiba mais</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DOCTOR SHOWCASE --- */}
      <section id="doctors" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Corpo Clínico</h2>
              <p className="text-slate-400 max-w-xl">
                Nossa equipe é formada por especialistas renomados, prontos para oferecer o melhor diagnóstico e tratamento.
              </p>
            </div>
            <button className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-teal-600 hover:border-teal-600 transition-colors font-semibold">
              Ver Todos os Médicos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-800 rounded-2xl overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/20 transition-colors z-10"></div>
                   <img 
                    src={i === 1 ? 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=800&auto=format&fit=crop' 
                        : i === 2 ? 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop'} 
                    alt="Doctor" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                    {i === 1 ? 'Cardiologista' : i === 2 ? 'Pediatra' : 'Neurologista'}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">Dr. Nome Sobrenome</h3>
                  <p className="text-slate-400 text-sm mb-4">Especialista com mais de 15 anos de experiência em hospitais de referência.</p>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:text-teal-400 gap-1">
                    Ver Perfil <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW: CONVÊNIOS SECTION --- */}
      <section id="insurance" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Convênios Aceitos</h2>
             <p className="text-slate-500 mt-2">Trabalhamos com os principais planos de saúde do país para sua comodidade.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos */}
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400">PLAN {i}</div>
              ))}
           </div>
        </div>
      </section>

      {/* --- NEW: UNITS SECTION --- */}
      <section id="units" className="py-20 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossas Unidades</h2>
                 <p className="text-slate-500 mb-8">Estrutura completa e padronizada em endereços estratégicos.</p>
                 <div className="space-y-6">
                    <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-teal-200 hover:bg-teal-50 transition cursor-pointer group">
                       <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition"><MapPin size={20}/></div>
                       <div>
                         <h3 className="font-bold text-slate-800">Unidade Paulista</h3>
                         <p className="text-sm text-slate-500">Av. Paulista, 1000 - Bela Vista, SP</p>
                         <p className="text-xs text-teal-600 mt-1 font-semibold">Aberto agora</p>
                       </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-teal-200 hover:bg-teal-50 transition cursor-pointer group">
                       <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition"><MapPin size={20}/></div>
                       <div>
                         <h3 className="font-bold text-slate-800">Unidade Morumbi</h3>
                         <p className="text-sm text-slate-500">Av. Morumbi, 2500 - Morumbi, SP</p>
                         <p className="text-xs text-teal-600 mt-1 font-semibold">Fecha às 20h</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2 bg-slate-100 rounded-2xl h-80 flex items-center justify-center text-slate-400 border border-slate-200">
                 <div className="flex flex-col items-center">
                   <MapPin size={48} className="mb-2 opacity-50"/>
                   <span className="font-bold">Mapa Interativo</span>
                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="footer" className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={20} />
              </div>
              <span className="text-xl font-bold text-slate-800">Vita<span className="text-teal-600">Clinic</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Comprometidos com a sua saúde através de tecnologia e humanização. Sua vida é nossa prioridade.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition cursor-pointer"><Phone size={14}/></div>
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition cursor-pointer"><MapPin size={14}/></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-teal-600 cursor-pointer transition">Sobre Nós</li>
              <li className="hover:text-teal-600 cursor-pointer transition">Corpo Clínico</li>
              <li className="hover:text-teal-600 cursor-pointer transition">Convênios Aceitos</li>
              <li className="hover:text-teal-600 cursor-pointer transition">Blog de Saúde</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2"><Clock size={14} className="text-teal-500"/> Seg - Sex: 07h - 20h</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-teal-500"/> Sábado: 08h - 14h</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-teal-500"/> Dom: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Receba dicas de saúde e novidades.</p>
            <div className="flex">
              <input type="email" placeholder="Seu e-mail" className="bg-slate-50 border border-slate-200 rounded-l-lg px-4 py-2 w-full text-sm outline-none focus:border-teal-500" />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
          &copy; 2024 VitaClinic. Todos os direitos reservados. Design Demo por WebCrafter.
        </div>
      </footer>
    </div>
  );
};

export default ClinicDemo;