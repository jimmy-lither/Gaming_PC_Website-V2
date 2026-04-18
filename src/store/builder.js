import { create } from 'zustand';

const builderSteps = [
  { id: 'case', name: 'Case', icon: '📦' },
  { id: 'cpu', name: 'CPU', icon: '🔲' },
  { id: 'gpu', name: 'GPU', icon: '🎮' },
  { id: 'motherboard', name: 'Motherboard', icon: '🔌' },
  { id: 'ram', name: 'RAM', icon: '💾' },
  { id: 'storage', name: 'Storage', icon: '💽' },
  { id: 'cooling', name: 'Cooling', icon: '❄️' },
  { id: 'psu', name: 'PSU', icon: '⚡' },
  { id: 'os', name: 'OS', icon: '🖥️' },
];

const presetBuilds = {
  esports: { cpu: 150, gpu: 200, ram: 80, storage: 50, total: 480 },
  '4k-monster': { cpu: 400, gpu: 1200, ram: 200, storage: 300, total: 2100 },
  streaming: { cpu: 350, gpu: 800, ram: 160, storage: 250, total: 1560 },
};

export const useBuilderStore = create((set, get) => ({
  currentStep: 0,
  steps: builderSteps,
  selectedParts: {},
  savedBuilds: [],
  
  goToStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, builderSteps.length - 1) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  
  selectPart: (stepId, part) => {
    set((state) => ({
      selectedParts: { ...state.selectedParts, [stepId]: part }
    }));
  },
  
  removePart: (stepId) => {
    set((state) => {
      const newParts = { ...state.selectedParts };
      delete newParts[stepId];
      return { selectedParts: newParts };
    });
  },
  
  getTotal: () => {
    const parts = get().selectedParts;
    return Object.values(parts).reduce((sum, part) => sum + (part.price || 0), 0);
  },
  
  getPerformanceScore: () => {
    const parts = get().selectedParts;
    let score = 50;
    if (parts.cpu) score += 15;
    if (parts.gpu) score += 20;
    if (parts.ram) score += 5;
    if (parts.cooling) score += 5;
    if (parts.psu) score += 5;
    return Math.min(score, 100);
  },
  
  loadPreset: (presetName) => {
    const preset = presetBuilds[presetName];
    if (!preset) return;
    
    set({
      selectedParts: {
        case: { name: 'NexCore Mid Tower', price: 80 },
        cpu: { name: presetName === 'esports' ? 'Intel i5-14600K' : presetName === '4k-monster' ? 'Intel i9-14900K' : 'AMD Ryzen 9 7900X', price: preset.cpu },
        gpu: { name: presetName === 'esports' ? 'RTX 4060' : presetName === '4k-monster' ? 'RTX 4090' : 'RTX 4080', price: preset.gpu },
        motherboard: { name: 'Z790 Gaming WiFi', price: 180 },
        ram: { name: presetName === 'esports' ? '16GB DDR5' : '32GB DDR5', price: preset.ram },
        storage: { name: '1TB NVMe SSD', price: preset.storage },
        cooling: { name: 'AIO 240mm', price: 100 },
        psu: { name: '750W Gold', price: 120 },
        os: { name: 'Windows 11 Pro', price: 140 },
      },
      currentStep: 0
    });
  },
  
  saveBuild: (name, email) => {
    set((state) => ({
      savedBuilds: [...state.savedBuilds, { name, email, parts: state.selectedParts, date: new Date().toISOString() }]
    }));
  },
  
  clearBuild: () => set({ selectedParts: {}, currentStep: 0 })
}));
