import { useState } from 'react';
import { useCartStore } from '../store/cart';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const subtotal = useCartStore(state => state.getSubtotal());
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      clearCart();
      navigate('/order-confirmed');
    }
  };

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display font-bold text-3xl mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-brand-cyan text-brand-bg' : 'bg-white/10 text-gray-400'}`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-brand-cyan' : 'bg-white/10'}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-brand-surface rounded-lg border border-white/10 p-6">
              {step === 1 && (
                <>
                  <h2 className="font-display font-bold text-xl mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <input type="email" placeholder="Email" required className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    <input type="tel" placeholder="Phone" required className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-display font-bold text-xl mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" required className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    <input type="text" placeholder="Address" required className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City" required className="bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                      <input type="text" placeholder="ZIP Code" required className="bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="font-display font-bold text-xl mb-6">Payment</h2>
                  <div className="space-y-4">
                    <input type="text" placeholder="Card Number" required className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" required className="bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                      <input type="text" placeholder="CVC" required className="bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
                    </div>
                    
                    {/* BNPL Options */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400 mb-3">Or pay with:</p>
                      <div className="flex gap-3">
                        <button type="button" className="flex-1 py-3 bg-[#FFB3C7] text-black font-semibold rounded hover:opacity-90">Klarna</button>
                        <button type="button" className="flex-1 py-3 bg-[#0035A6] text-white font-semibold rounded hover:opacity-90">Affirm</button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(step - 1)} className="flex-1 py-3 border border-white/20 rounded hover:border-brand-cyan transition-colors">
                    Back
                  </button>
                )}
                <button type="submit" className="flex-1 py-3 bg-brand-cyan text-brand-bg font-display font-bold rounded hover:bg-cyan-400 transition-colors">
                  {step === 3 ? `Pay $${subtotal.toLocaleString()}` : 'Continue'}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-center gap-6 text-xs text-gray-400">
                <span>🔒 SSL Secure</span>
                <span>✓ Free Returns</span>
                <span>⚡ Fast Shipping</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-brand-surface rounded-lg border border-white/10 p-6 sticky top-24">
              <h2 className="font-display font-bold text-xl mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-gray-400">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-brand-cyan">${(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-lg font-display font-bold pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="text-brand-cyan">${subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
