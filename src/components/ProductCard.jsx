import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cart';

export default function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem);
  const toggleCart = useCartStore(state => state.toggleCart);
  
  const isLowStock = product.stock < 5;
  const tierColors = {
    Entry: 'bg-green-600',
    Pro: 'bg-blue-600',
    Elite: 'bg-purple-600',
    Creator: 'bg-pink-600',
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
    toggleCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-brand-surface rounded-lg overflow-hidden border border-white/10 hover:border-brand-cyan/50 transition-colors"
    >
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Badge */}
      <div className={`absolute top-3 left-3 ${tierColors[product.tier]} px-2 py-1 text-xs font-bold rounded`}>
        {product.tier}
      </div>

      {/* Low Stock Badge */}
      {isLowStock && (
        <div className="absolute top-3 right-3 bg-brand-orange px-2 py-1 text-xs font-bold rounded animate-pulse">
          Low Stock
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-bold text-lg mb-1">{product.name}</h3>
          <p className="text-sm text-gray-400 mb-3">{product.tagline}</p>
        </Link>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
          <div><span className="text-gray-500">GPU:</span> {product.specs.gpu}</div>
          <div><span className="text-gray-500">CPU:</span> {product.specs.cpu}</div>
          <div><span className="text-gray-500">RAM:</span> {product.specs.ram}</div>
          <div><span className="text-gray-500">Storage:</span> {product.specs.storage}</div>
        </div>

        {/* FPS Chip */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xs bg-brand-cyan/10 text-brand-cyan px-2 py-1 rounded">
            {product.fps.cyberpunk['1440p']}fps @ 1440p Cyberpunk
          </span>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-xl">${product.price.toLocaleString()}</span>
          <div className="flex space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="px-3 py-2 text-sm border border-white/20 rounded hover:border-brand-cyan transition-colors"
            >
              Quick Specs
            </Link>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-brand-cyan text-brand-bg text-sm font-semibold rounded hover:bg-cyan-400 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
