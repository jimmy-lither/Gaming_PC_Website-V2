import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cart';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, items, closeCart, removeItem, updateQuantity } = useCartStore();
  const subtotal = useCartStore(state => state.getSubtotal());

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-surface z-50 border-l border-white/10"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="font-display font-bold text-xl">Your Cart</h2>
                <button onClick={closeCart} className="p-2 hover:text-brand-cyan" aria-label="Close cart">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-400 mt-8">
                    <p>Your cart is empty</p>
                    <Link to="/shop" onClick={closeCart} className="text-brand-cyan mt-2 inline-block">
                      Continue Shopping →
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-brand-bg rounded-lg p-3">
                        <img src={item.image} alt={item.name} className="w-20 h-14 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-brand-cyan font-bold">${item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white/10 rounded hover:bg-brand-cyan hover:text-brand-bg"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white/10 rounded hover:bg-brand-cyan hover:text-brand-bg"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-xs text-gray-400 hover:text-brand-orange"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-white/10 p-4 space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-display font-bold">${subtotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout</p>
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="block w-full bg-brand-cyan text-brand-bg font-display font-bold py-3 rounded text-center hover:bg-cyan-400 transition-colors"
                  >
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
