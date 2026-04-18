import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/90 to-brand-bg" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            BUILT FOR THE <span className="text-brand-cyan">RELENTLESS</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Zero bottlenecks. Max frames. Every build stress-tested for 72 hours.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-brand-cyan text-brand-bg font-display font-bold rounded hover:bg-cyan-400 transition-colors"
            >
              Shop Prebuilts
            </Link>
            <Link
              to="/builder"
              className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-display font-bold rounded hover:bg-brand-cyan/10 transition-colors"
            >
              Configure Yours
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-surface border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: '4K Ready', value: '✓' },
              { label: '240Hz+', value: 'FPS' },
              { label: '5-Year Warranty', value: 'Full' },
              { label: 'Ships In', value: '48h' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-brand-cyan font-display font-bold text-2xl">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Featured Systems</h2>
            <p className="text-gray-400">Engineered for dominance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block px-8 py-3 border border-white/20 rounded hover:border-brand-cyan transition-colors">
              View All Systems →
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Banner */}
      <section className="py-20 bg-gradient-to-r from-brand-surface to-brand-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            From Valorant to Cyberpunk 2077
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Every rig benchmarked across 12 titles. Thermals locked. Performance guaranteed.
          </p>
        </div>
      </section>

      {/* Why NexCore */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Why NexCore</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Lifetime Support', desc: '24/7 expert assistance' },
              { title: '72h Burn Test', desc: 'Every build stress-tested' },
              { title: '5-Year Warranty', desc: 'Full parts coverage' },
              { title: 'Same-Day Ship', desc: 'Order by 2PM EST' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-brand-surface rounded-lg border border-white/10">
                <div className="text-brand-cyan text-4xl mb-4">⚡</div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">TRUSTED PARTNERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Intel', 'AMD', 'NVIDIA', 'Corsair', 'ASUS ROG', 'Samsung'].map(brand => (
              <span key={brand} className="text-xl font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
