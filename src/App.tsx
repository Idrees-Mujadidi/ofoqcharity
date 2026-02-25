import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-text-primary dark:text-text-dark-primary bg-bg-light dark:bg-bg-dark selection:bg-brand-gold selection:text-brand-blue overflow-x-hidden w-full min-h-screen transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
