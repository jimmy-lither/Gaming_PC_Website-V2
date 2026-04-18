import { useState } from 'react';
import { faqs } from '../data/faqs';

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-4xl mb-8 text-center">Support Center</h1>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-surface rounded-lg border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-brand-cyan">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl mb-6">Contact Us</h2>
          <form className="bg-brand-surface rounded-lg border border-white/10 p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Order #</label>
                <input type="text" className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Issue Type</label>
              <select className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan">
                <option>Technical Support</option>
                <option>Warranty Claim</option>
                <option>Order Status</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-brand-bg border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-brand-cyan" />
            </div>
            <button type="submit" className="w-full py-3 bg-brand-cyan text-brand-bg font-display font-bold rounded hover:bg-cyan-400 transition-colors">
              Submit Ticket
            </button>
          </form>
        </section>

        {/* Live Chat Placeholder */}
        <div className="fixed bottom-6 right-6 z-40">
          <button className="w-14 h-14 bg-brand-cyan text-brand-bg rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
