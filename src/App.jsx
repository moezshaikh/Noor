import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import Gallery from './pages/Gallery';
import About from './pages/about';
import Contact from './pages/contact';
import Submit from './pages/submit'; // Capitalized to match component usage
import Settings from './pages/settings';
import CartCheckout from './pages/CartCheckout';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/CartCheckout" element={<CartCheckout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
