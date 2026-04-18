import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set((state) => ({
      items: state.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    }));
  },
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
  
  getSubtotal: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  
  getItemCount: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
  
  clearCart: () => set({ items: [] })
}));
