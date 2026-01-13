import React from 'react';
import { HeartPulse, Stethoscope, Calendar, Clock, MapPin, ChevronRight, Activity } from 'lucide-react';

const ClinicDemo: React.FC = () => {
  return (
    <div className="font-sans bg-white text-slate-600 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <HeartPulse size={24} />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-tight">Vita<span className="text-teal-500">Clinic</span></span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-teal-500 transition">Especialidades</a>
            <a href="#" className="hover:text-teal-500 transition">Corpo Clínico</a>
            <a href="#" className="hover:text-teal-500 transition">Convênios</a>
            <a href="#" className="hover:text-teal-500 transition">Exames</a>
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold transition shadow-md shadow-teal-200 flex items-center gap-2">
            <Calendar size={18} /> Agendar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Medicina Integrada & Humanizada
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-[1.1]">
              Cuidando do seu bem-estar com <span className="text-teal-500">excelência.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Equipe multidisciplinar, tecnologia de ponta e um ambiente acolhedor para cuidar de você e da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-800 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2">
                Agendar Consulta
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-lg font-bold hover:border-teal-500 hover:text-teal-500 transition">
                Conheça a Clínica
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-10 right-10 w-20 h-20 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop" 
              alt="Médica sorrindo" 
              className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
            />
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Check-up Completo</p>
                  <p className="text-xs text-slate-500">Resultados em 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Info Bar */}
      <section className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 opacity-80" />
            <div>
              <h3 className="font-bold text-lg">Horário de Atendimento</h3>
              <p className="text-teal-100 text-sm">Seg - Sex: 07:00 - 20:00</p>
              <p className="text-teal-100 text-sm">Sáb: 08:00 - 14:00</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 opacity-80" />
            <div>
              <h3 className="font-bold text-lg">Localização Privilegiada</h3>
              <p className="text-teal-100 text-sm">Av. Paulista, 1000 - 5º Andar</p>
              <p className="text-teal-100 text-sm">Estacionamento no local</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Stethoscope className="w-8 h-8 opacity-80" />
            <div>
              <h3 className="font-bold text-lg">Plantão Clínico</h3>
              <p className="text-teal-100 text-sm">Atendimento sem agendamento para casos de baixa complexidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Nossas Especialidades</h2>
          <p className="text-slate-500">Cobrimos diversas áreas da medicina para um tratamento completo.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Cardiologia', 'Dermatologia', 'Pediatria', 'Ortopedia', 'Ginecologia', 'Oftalmologia', 'Nutrição', 'Psicologia'].map((spec) => (
            <div key={spec} className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition duration-300 text-center cursor-pointer border border-transparent hover:border-teal-100 group">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition">
                <HeartPulse size={20} />
              </div>
              <h3 className="font-bold text-slate-700">{spec}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClinicDemo;