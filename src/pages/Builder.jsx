import { motion } from 'framer-motion';
import { useBuilderStore } from '../store/builder';
import { useCartStore } from '../store/cart';

export default function Builder() {
  const { steps, currentStep, goToStep, nextStep, prevStep, selectedParts, getTotal, getPerformanceScore, loadPreset, clearBuild } = useBuilderStore();
  const addItem = useCartStore(state => state.addItem);
  const toggleCart = useCartStore(state => state.toggleCart);

  const handleAddToCart = () => {
    const total = getTotal();
    if (total === 0) return;
    
    addItem({
      id: 'custom-build',
      name: 'Custom PC Build',
      price: total,
      image: 'https://placehold.co/600x400/080B10/00E5FF?text=Custom+Build&font=montserrat',
      specs: selectedParts,
    });
    toggleCart();
  };

  return (
    <div className="pt-20 px-4 min-h-screen pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display font-bold text-4xl mb-8">Custom PC Configurator</h1>

        {/* Presets */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button onClick={() => loadPreset('esports')} className="px-4 py-2 bg-brand-surface border border-white/10 rounded hover:border-brand-cyan transition-colors text-sm">
            ⚡ Esports Beast
          </button>
          <button onClick={() => loadPreset('4k-monster')} className="px-4 py-2 bg-brand-surface border border-white/10 rounded hover:border-brand-cyan transition-colors text-sm">
            🎮 4K Monster
          </button>
          <button onClick={() => loadPreset('streaming')} className="px-4 py-2 bg-brand-surface border border-white/10 rounded hover:border-brand-cyan transition-colors text-sm">
            📺 Streaming Titan
          </button>
          <button onClick={clearBuild} className="px-4 py-2 bg-brand-orange/20 border border-brand-orange rounded hover:bg-brand-orange/30 transition-colors text-sm">
            Clear All
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Steps */}
          <div className="lg:col-span-2 space-y-6">
            {steps.map((step, index) => {
              const isSelected = selectedParts[step.id];
              const isCurrent = index === currentStep;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-brand-surface rounded-lg border ${isCurrent ? 'border-brand-cyan' : 'border-white/10'} p-4 cursor-pointer`}
                  onClick={() => goToStep(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <h3 className="font-display font-bold">{step.name}</h3>
                        {isSelected ? (
                          <p className="text-brand-cyan text-sm">{isSelected.name} - ${isSelected.price}</p>
                        ) : (
                          <p className="text-gray-400 text-sm">Not selected</p>
                        )}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-green-600' : 'bg-white/10'}`}>
                      {isSelected && '✓'}
                    </div>
                  </div>
                  
                  {isCurrent && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((opt) => (
                          <button
                            key={opt}
                            onClick={(e) => {
                              e.stopPropagation();
                              useBuilderStore.getState().selectPart(step.id, {
                                name: `${step.name} Option ${opt}`,
                                price: 100 * opt,
                              });
                            }}
                            className="p-3 bg-brand-bg border border-white/10 rounded hover:border-brand-cyan transition-colors text-left"
                          >
                            <div className="font-semibold text-sm">{step.name} Option {opt}</div>
                            <div className="text-brand-cyan">${100 * opt}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-brand-surface rounded-lg border border-white/10 p-6 sticky top-24">
              <h2 className="font-display font-bold text-xl mb-6">Build Summary</h2>
              
              {/* Performance Score */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Performance Score</span>
                  <span className="font-bold">{getPerformanceScore()}/100</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-cyan to-blue-600 transition-all"
                    style={{ width: `${getPerformanceScore()}%` }}
                  />
                </div>
              </div>

              {/* Selected Parts */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {Object.entries(selectedParts).length === 0 ? (
                  <p className="text-gray-400 text-sm">No parts selected</p>
                ) : (
                  Object.entries(selectedParts).map(([key, part]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{key}</span>
                      <span>${part.price}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Total */}
              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between text-xl font-display font-bold">
                  <span>Total</span>
                  <span className="text-brand-cyan">${getTotal().toLocaleString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={getTotal() === 0}
                  className="w-full py-3 bg-brand-cyan text-brand-bg font-display font-bold rounded hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
                <button className="w-full py-3 border border-white/20 rounded hover:border-brand-cyan transition-colors text-sm">
                  Save Build
                </button>
                <button className="w-full py-3 border border-white/20 rounded hover:border-brand-cyan transition-colors text-sm">
                  Share Build
                </button>
              </div>

              {/* Estimated FPS */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="font-display font-bold text-sm mb-3">Estimated FPS</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Valorant @ 1440p</span>
                    <span>{getPerformanceScore() > 70 ? '400+' : getPerformanceScore() > 50 ? '250+' : '150+'} fps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Warzone @ 1440p</span>
                    <span>{getPerformanceScore() > 70 ? '180+' : getPerformanceScore() > 50 ? '120+' : '80+'} fps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cyberpunk @ 1440p</span>
                    <span>{getPerformanceScore() > 70 ? '120+' : getPerformanceScore() > 50 ? '80+' : '50+'} fps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-surface border-t border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-2 border border-white/20 rounded hover:border-brand-cyan transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-400">Step {currentStep + 1} of {steps.length}</span>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="px-6 py-2 bg-brand-cyan text-brand-bg font-semibold rounded hover:bg-cyan-400 transition-colors disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
