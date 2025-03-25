import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavModel from './components/Navbar';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Producto from "./components/Producto";
import Carrovista from "./views/Carrovista";
import FormularioVista from "./views/FormularioVista";
import { GlobalProvider } from './context/GlobalContext';
import WhatsappButton from './components/whatsappButton';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavModel />
          <br />
          <main className='flex-grow-1 mt-navbar'>
            <Routes>
              <Route path="/" element={<Nosotros />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/producto" element={<Producto />} />
              <Route path="/carro" element={<Carrovista />} />
              <Route path="/formulario" element={<FormularioVista />} /> {/* Nueva ruta */}
            </Routes>
            <WhatsappButton /> {/*  */}
          </main>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}
export default App;


