import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { components, componentCategories } from '../data/products';

export default function Components() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredComponents = selectedCategory === 'all' 
    ? components 
    : components.filter(c => c.category === selectedCategory);

  const sortedComponents = [...filteredComponents].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-display font-bold text-4xl mb-2">PC Components</h1>
          <p className="text-gray-400">Build your dream machine with premium parts</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-brand-cyan text-brand-bg' 
                : 'bg-brand-surface border border-white/10 hover:border-brand-cyan/50'
            }`}
          >
            All Parts
          </button>
          {componentCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat.id 
                  ? 'bg-brand-cyan text-brand-bg' 
                  : 'bg-brand-surface border border-white/10 hover:border-brand-cyan/50'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-brand-surface border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-cyan"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Results Count */}
        <p className="text-gray-400 mb-6">{sortedComponents.length} products found</p>

        {/* Components Grid */}
        {sortedComponents.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No components found in this category
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedComponents.map(product => (
              <ProductCard key={product.id} product={product} isComponent />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}