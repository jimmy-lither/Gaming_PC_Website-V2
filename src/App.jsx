import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Builder from './pages/Builder';
import About from './pages/About';
import Support from './pages/Support';
import Checkout from './pages/Checkout';

function OrderConfirmed() {
  return (
    <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">✓</div>
        <h1 className="font-display font-bold text-3xl mb-4">Order Confirmed!</h1>
        <p className="text-gray-400 mb-8">Thank you for your order. We'll notify you when it ships.</p>
        <a href="/" className="inline-block px-8 py-3 bg-brand-cyan text-brand-bg font-display font-bold rounded hover:bg-cyan-400 transition-colors">
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-brand-bg text-white font-body">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmed" element={<OrderConfirmed />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
