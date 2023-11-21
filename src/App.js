import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Galeria from './components/Galeria/Galeria';
import Info from './components/Info/Info';
import Contacto from './components/Contacto/Contacto';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div>
      <div className="navbar desktop">
        <Navbar />
      </div>

      <div className="sidebar mobile">
        <Sidebar />
      </div>
      <Slider />
      <Galeria />
      <Info />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
