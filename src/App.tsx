import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductRoute from './pages/ProductRoute';
import { QuoteProvider } from './context/QuoteContext';
import RouteMeta from './components/RouteMeta';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import About from './pages/About';
import TrustSignals from './pages/TrustSignals';
import LegalPage from './pages/LegalPage';

export default function App() {
  return (
    <HashRouter>
      <QuoteProvider>
      <RouteMeta />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryId" element={<ProductRoute />} />
        <Route path="/applications" element={<Industries />} />
        <Route path="/services" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/downloads" element={<TrustSignals />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="/terms" element={<LegalPage title="Terms" />} />
      </Routes>
      <Footer />
      <WhatsAppFab />
      </QuoteProvider>
    </HashRouter>
  );
}
