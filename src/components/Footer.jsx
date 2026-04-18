import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-brand-cyan">Prebuilts</Link></li>
              <li><Link to="/builder" className="hover:text-brand-cyan">Custom Build</Link></li>
              <li><a href="#" className="hover:text-brand-cyan">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/support" className="hover:text-brand-cyan">Help Center</Link></li>
              <li><a href="#" className="hover:text-brand-cyan">Warranty</a></li>
              <li><a href="#" className="hover:text-brand-cyan">Drivers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-cyan">About Us</Link></li>
              <li><a href="#" className="hover:text-brand-cyan">Careers</a></li>
              <li><a href="#" className="hover:text-brand-cyan">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-cyan">Discord</a></li>
              <li><a href="#" className="hover:text-brand-cyan">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-cyan">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-brand-cyan clip-path-angular" />
            <span className="font-display font-bold">NEXCORE SYSTEMS</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 NexCore Systems. Built for the Relentless.</p>
        </div>
      </div>
    </footer>
  );
}
