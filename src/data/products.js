export const products = [
  {
    id: 'phantom-x',
    name: 'Phantom X',
    tagline: 'Entry-level dominance',
    tier: 'Entry',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b847?w=600&h=400&fit=crop',
    specs: {
      gpu: 'RTX 4060',
      cpu: 'Intel i5-14600K',
      ram: '16GB DDR5',
      storage: '1TB NVMe SSD',
    },
    fps: {
      valorant: { '1080p': 400, '1440p': 320, '4k': 180 },
      warzone: { '1080p': 180, '1440p': 140, '4k': 85 },
      cyberpunk: { '1080p': 95, '1440p': 72, '4k': 45 },
    },
    stock: 12,
  },
  {
    id: 'omen-ultra',
    name: 'Omen Ultra',
    tagline: 'Professional grade performance',
    tier: 'Pro',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c826aa5?w=600&h=400&fit=crop',
    specs: {
      gpu: 'RTX 4080',
      cpu: 'Intel i7-14700K',
      ram: '32GB DDR5',
      storage: '2TB NVMe SSD',
    },
    fps: {
      valorant: { '1080p': 500, '1440p': 420, '4k': 280 },
      warzone: { '1080p': 240, '1440p': 200, '4k': 140 },
      cyberpunk: { '1080p': 145, '1440p': 110, '4k': 75 },
    },
    stock: 8,
  },
  {
    id: 'titan-forge',
    name: 'Titan Forge',
    tagline: 'Uncompromising power',
    tier: 'Elite',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&h=400&fit=crop',
    specs: {
      gpu: 'RTX 4090',
      cpu: 'Intel i9-14900K',
      ram: '64GB DDR5',
      storage: '4TB NVMe SSD',
    },
    fps: {
      valorant: { '1080p': 600, '1440p': 550, '4k': 400 },
      warzone: { '1080p': 320, '1440p': 280, '4k': 200 },
      cyberpunk: { '1080p': 200, '1440p': 165, '4k': 120 },
    },
    stock: 3,
  },
  {
    id: 'stealth-pro',
    name: 'Stealth Pro',
    tagline: 'AMD supremacy',
    tier: 'Pro',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1555618568-9b639a9187e7?w=600&h=400&fit=crop',
    specs: {
      gpu: 'RX 7900 XT',
      cpu: 'AMD Ryzen 9 7950X',
      ram: '32GB DDR5',
      storage: '2TB NVMe SSD',
    },
    fps: {
      valorant: { '1080p': 480, '1440p': 400, '4k': 260 },
      warzone: { '1080p': 220, '1440p': 185, '4k': 130 },
      cyberpunk: { '1080p': 130, '1440p': 100, '4k': 70 },
    },
    stock: 6,
  },
  {
    id: 'creator-beast',
    name: 'Creator Beast',
    tagline: 'Create without limits',
    tier: 'Creator',
    price: 2899,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop',
    specs: {
      gpu: 'RTX 4080 Super',
      cpu: 'AMD Ryzen 9 7900X',
      ram: '64GB DDR5',
      storage: '4TB NVMe SSD',
    },
    fps: {
      valorant: { '1080p': 520, '1440p': 440, '4k': 300 },
      warzone: { '1080p': 260, '1440p': 220, '4k': 155 },
      cyberpunk: { '1080p': 155, '1440p': 120, '4k': 85 },
    },
    stock: 4,
  },
];

export const tiers = ['Entry', 'Pro', 'Elite', 'Creator'];
export const gpus = ['RTX 4060', 'RTX 4080', 'RTX 4080 Super', 'RTX 4090', 'RX 7900 XT'];
export const cpus = ['Intel i5-14600K', 'Intel i7-14700K', 'Intel i9-14900K', 'AMD Ryzen 9 7900X', 'AMD Ryzen 9 7950X'];
export const rams = ['16GB DDR5', '32GB DDR5', '64GB DDR5'];
export const useCases = ['Esports', '1440p Gaming', '4K Gaming', 'Streaming', 'Content Creation'];
