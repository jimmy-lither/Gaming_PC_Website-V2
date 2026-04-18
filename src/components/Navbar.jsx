import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cart';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const itemCount = useCartStore(state => state.getItemCount());
  const toggleCart = useCartStore(state => state.toggleCart);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-cyan clip-path-angular" />
              <span className="font-display font-bold text-xl tracking-wider">NEXCORE</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-sm font-medium hover:text-brand-cyan transition-colors">Shop</Link>
              <Link to="/builder" className="text-sm font-medium hover:text-brand-cyan transition-colors">Build PC</Link>
              <Link to="/about" className="text-sm font-medium hover:text-brand-cyan transition-colors">About</Link>
              <Link to="/support" className="text-sm font-medium hover:text-brand-cyan transition-colors">Support</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:text-brand-cyan transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button 
                onClick={toggleCart}
                className="relative p-2 hover:text-brand-cyan transition-colors"
                aria-label="Cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-cyan text-brand-bg text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              <Link 
                to="/builder"
                className="hidden md:block px-4 py-2 bg-brand-cyan text-brand-bg font-display font-semibold text-sm rounded hover:bg-cyan-400 transition-colors"
              >
                Build PC
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 hover:text-brand-cyan transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-bg/95 pt-20"
          >
            <div className="max-w-2xl mx-auto px-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-4 bg-brand-surface border border-white/10 rounded-lg text-lg focus:outline-none focus:border-brand-cyan"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white"
              >
                Press ESC to close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 bg-brand-bg md:hidden"
          >
            <div className="p-4">
              <button 
                onClick={() => setMobileOpen(false)}
                className="mb-8 p-2 hover:text-brand-cyan"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col space-y-6 text-lg">
                <Link to="/shop" onClick={() => setMobileOpen(false)} className="hover:text-brand-cyan">Shop</Link>
                <Link to="/builder" onClick={() => setMobileOpen(false)} className="hover:text-brand-cyan">Build PC</Link>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-brand-cyan">About</Link>
                <Link to="/support" onClick={() => setMobileOpen(false)} className="hover:text-brand-cyan">Support</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
