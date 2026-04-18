import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, tiers, gpus, cpus, rams, useCases } from '../data/products';

export default function Shop() {
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    gpu: [],
    cpu: [],
    ram: [],
    useCase: [],
  });
  const [sortBy, setSortBy] = useState('popularity');

  const filteredProducts = products.filter(p => {
    if (p.price < filters.priceRange[0] || p.price > filters.priceRange[1]) return false;
    if (filters.gpu.length && !filters.gpu.includes(p.specs.gpu)) return false;
    if (filters.ram.length && !filters.ram.includes(p.specs.ram)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'fps': return b.fps.cyberpunk['1440p'] - a.fps.cyberpunk['1440p'];
      default: return 0;
    }
  });

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display font-bold text-4xl mb-8">Prebuilt Systems</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            {/* Price Range */}
            <div className="bg-brand-surface rounded-lg p-4 border border-white/10">
              <h3 className="font-display font-bold mb-4">Price Range</h3>
              <input
                type="range"
                min="0"
                max="5000"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(f => ({ ...f, priceRange: [0, parseInt(e.target.value)] }))}
                className="w-full accent-brand-cyan"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>$0</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            {/* GPU Filter */}
            <div className="bg-brand-surface rounded-lg p-4 border border-white/10">
              <h3 className="font-display font-bold mb-4">GPU</h3>
              <div className="space-y-2">
                {gpus.map(gpu => (
                  <label key={gpu} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={filters.gpu.includes(gpu)}
                      onChange={(e) => setFilters(f => ({
                        ...f,
                        gpu: e.target.checked ? [...f.gpu, gpu] : f.gpu.filter(g => g !== gpu)
                      }))}
                      className="mr-2 accent-brand-cyan"
                    />
                    {gpu}
                  </label>
                ))}
              </div>
            </div>

            {/* RAM Filter */}
            <div className="bg-brand-surface rounded-lg p-4 border border-white/10">
              <h3 className="font-display font-bold mb-4">RAM</h3>
              <div className="space-y-2">
                {rams.map(ram => (
                  <label key={ram} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={filters.ram.includes(ram)}
                      onChange={(e) => setFilters(f => ({
                        ...f,
                        ram: e.target.checked ? [...f.ram, ram] : f.ram.filter(r => r !== ram)
                      }))}
                      className="mr-2 accent-brand-cyan"
                    />
                    {ram}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Sort & Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">{sortedProducts.length} systems found</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-surface border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-cyan"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="fps">FPS Performance</option>
              </select>
            </div>

            {/* Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                No products match your filters
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
