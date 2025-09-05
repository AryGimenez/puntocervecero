import { useState } from 'react';


// Datos de ejemplo para el menú
const menuItems = {
  bebidas: [
    { name: 'IPA Artesanal', price: '7.500', description: 'Una IPA con notas cítricas y a pino.', image: '' },
    { name: 'Lager Dorada', price: '6.500', description: 'Cerveza ligera y refrescante.', image: '' },
    { name: 'Stout de Chocolate', price: '8.000', description: 'Cremosa, con sabor a chocolate y café.', image: '' },
    { name: 'Cerveza de Trigo', price: '7.000', description: 'Aromas a plátano y clavo de olor.', image: '' },
    { name: 'Pinta de la Casa', price: '6.000', description: 'Nuestra especialidad, pregunta por el sabor.', image: '' },
    { name: 'Coca-Cola', price: '2.500', description: 'Refresco clásico.', image: '' },
    { name: 'Jugo Natural', price: '3.000', description: 'Jugo del día, fresco y saludable.', image: '' },
  ],
  comidas: [
    { name: 'Hamburguesa Clásica', price: '12.000', description: 'Carne de res, queso, lechuga y tomate.', image: '' },
    { name: 'Nachos con Queso', price: '9.500', description: 'Crujientes nachos cubiertos con queso derretido y jalapeños.', image: '' },
    { name: 'Papas con Cheddar y Tocino', price: '8.500', description: 'Papas fritas con abundante queso cheddar y trozos de tocino crujiente.', image: '' },
    { name: 'Alitas de Pollo BBQ', price: '11.000', description: 'Alitas bañadas en nuestra salsa BBQ casera.', image: '' },
    { name: 'Tacos de Carnitas', price: '10.500', description: 'Tacos de cerdo con cebolla y cilantro.', image: '' },
  ],
};

// Datos de ejemplo para eventos futuros
const events = [
  {
    title: 'Noche de Cerveza Artesanal',
    date: 'Viernes, 27 de Septiembre',
    time: '20:00 hs',
    description: 'Degustación de cervezas locales, con la presencia del maestro cervecero.',
  },
  {
    title: 'Música en Vivo: Acústico de Jazz',
    date: 'Sábado, 5 de Octubre',
    time: '21:30 hs',
    description: 'Disfruta de una noche relajada con música en vivo de jazz y blues.',
  },
  {
    title: 'Quiz de Conocimientos Cerveceros',
    date: 'Jueves, 17 de Octubre',
    time: '19:00 hs',
    description: 'Pon a prueba tus conocimientos sobre cerveza y gana premios increíbles.',
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('bebidas');

  const renderMenuItems = (category) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {menuItems[category].map((item, index) => (
        <div key={index} className="bg-stone-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center h-48 bg-stone-900 rounded-lg mb-4 text-white text-sm font-semibold">
            {item.image}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
          <p className="text-sm text-stone-400 mb-4">{item.description}</p>
          <p className="text-2xl font-bold text-amber-400">${item.price}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-stone-900 min-h-screen text-stone-200 font-sans relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .font-sans {
            font-family: 'Inter', sans-serif;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <header className="bg-stone-800 text-center py-16 px-4 rounded-b-3xl shadow-lg">
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-2 tracking-wide">Punto Cervecero</h1>
        <p className="text-xl text-stone-400">Donde cada pinta es una experiencia.</p>
      </header>

      <main className="container mx-auto p-8 max-w-7xl">
        
        {/* Menu Section */}
        <section id="menu" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">Nuestro Menú</h2>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('bebidas')}
              className={`py-3 px-8 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === 'bebidas' ? 'bg-amber-500 text-stone-900 shadow-md' : 'bg-stone-700 text-stone-200 hover:bg-stone-600'
              }`}
            >
              Bebidas
            </button>
            <button
              onClick={() => setActiveTab('comidas')}
              className={`py-3 px-8 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === 'comidas' ? 'bg-amber-500 text-stone-900 shadow-md' : 'bg-stone-700 text-stone-200 hover:bg-stone-600'
              }`}
            >
              Comidas
            </button>
          </div>
          
          {activeTab === 'bebidas' ? renderMenuItems('bebidas') : renderMenuItems('comidas')}

        </section>

        {/* Brand Boosting Section */}
        <section id="about" className="bg-stone-800 p-8 sm:p-12 rounded-3xl text-center mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">¡La Cerveza Perfecta Te Espera!</h2>
          <p className="text-lg text-stone-400 max-w-3xl mx-auto mb-6">
            En Punto Cervecero, nos apasiona la buena cerveza. Te invitamos a explorar nuestra cuidadosa selección de cervezas artesanales, locales e importadas, diseñadas para complacer a los paladares más exigentes. ¡Ven y descubre tu nueva favorita!
          </p>
          <a href="https://www.instagram.com/puntocervecero_artigas/" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-stone-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105">
            ¡Visítanos Hoy!
          </a>
        </section>
        
        {/* New Events Section */}
        <section id="events" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-stone-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-amber-400 font-semibold mb-2">{event.date} • {event.time}</p>
                <p className="text-stone-400">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Business Hours Section */}
        <section id="hours" className="my-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">Horario de Atención</h2>
          <div className="bg-stone-800 p-8 rounded-3xl shadow-lg text-center max-w-lg mx-auto">
            <ul className="text-lg text-stone-300 space-y-2">
              <li><span className="font-semibold text-white">Lunes a Jueves:</span> 18:00 - 00:00</li>
              <li><span className="font-semibold text-white">Viernes y Sábado:</span> 18:00 - 02:00</li>
              <li><span className="font-semibold text-white">Domingo:</span> Cerrado</li>
            </ul>
          </div>
        </section>

      </main>

      {/* WhatsApp Chatbot Button */}
      <a
        href="https://wa.me/59899123456?text=Hola,%20me%20gustaría%20hacer%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 group"
        aria-label="Chatear por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8">
          <path fill="currentColor" d="M380.9 97.1C339.4 53.6 288.7 32 235.3 32.1c-99.7-.1-182.9 66.8-212.9 160.7c-5.7 18.2-11.3 36.5-16.9 54.8c-2.4 7.6-3.8 15.6-3.8 23.9c0 40.5 16.5 78.4 44.5 106.4l-14.7 54.4c-1.9 6.9 .6 14.4 6.7 17.6c1.1 .6 2.3 1 3.5 1.2c2.4 .4 4.9 .3 7.3-.2l56.8-13.7c26.5 11 55.4 16.6 85.2 16.6h.4c99.7 0 182.9-66.8 212.9-160.7c5.7-18.2 11.3-36.5 16.9-54.8c2.4-7.6 3.8-15.6 3.8-23.9c0-40.5-16.5-78.4-44.5-106.4zM235.3 430.4c-28.7 0-56.9-5.9-82.5-17.7l-4.5-2.2-46.3 11.2 11.2-46.3-2.2-4.5c-11.8-25.5-17.7-53.8-17.7-82.5c0-83.3 67.7-151 151-151s151 67.7 151 151s-67.7 151-151 151zM343.3 226.5c-3.1-6.1-1.1-13.4 4.6-16.5l26.6-13.8c6.9-3.6 11.4-10.7 11.4-18.3c0-7.6-4.5-14.7-11.4-18.3l-26.6-13.8c-5.7-3.1-7.7-10.4-4.6-16.5l1.6-3.2c3.1-6.1 1.1-13.4-4.6-16.5c-1.1-.6-2.3-1-3.5-1.2c-2.4-.4-4.9-.3-7.3.2c-6.1 1.6-10.2 7.7-9.3 14.1l1.6 3.2c.4 .9 .6 1.9 .6 2.9c0 6.9-3.9 13-9.5 16.1l-26.6 13.8c-6.9 3.6-11.4 10.7-11.4 18.3c0 7.6 4.5 14.7 11.4 18.3l26.6 13.8c5.7 3.1 7.7 10.4 4.6 16.5l-1.6 3.2c-3.1 6.1-1.1 13.4 4.6 16.5c1.1 .6 2.3 1 3.5 1.2c2.4 .4 4.9 .3 7.3-.2c6.1-1.6 10.2-7.7 9.3-14.1z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-stone-800 text-center p-6 mt-16 rounded-t-3xl text-stone-400">
        <p>&copy; {new Date().getFullYear()} Punto Cervecero. Todos los derechos reservados.</p>
        <p className="mt-2">
          Síguenos en redes sociales:
          <a
            href="https://www.instagram.com/puntocervecero_artigas/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-amber-400 hover:text-amber-500 transition-colors duration-300"
          >
            Instagram
          </a>
        </p>
      </footer>
      
    </div>
  );
};

export default App;
