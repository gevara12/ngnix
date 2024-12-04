'use client';

import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import {
  ShoppingItem,
  ShoppingAction,
  shoppingReducer,
  loadItems,
  createShoppingActions,
} from '@/lib/store';

interface ShoppingContextType {
  items: ShoppingItem[];
  actions: ReturnType<typeof createShoppingActions>;
  isLoading: boolean;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(
  undefined
);

export function ShoppingProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(shoppingReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedItems = loadItems();
    dispatch({ type: 'INIT_ITEMS', payload: savedItems });
    setIsLoading(false);
  }, []);

  const actions = createShoppingActions(dispatch);

  return (
    <ShoppingContext.Provider value={{ items, actions, isLoading }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShoppingList() {
  const context = useContext(ShoppingContext);
  if (context === undefined) {
    throw new Error('useShoppingList must be used within a ShoppingProvider');
  }
  return context;
}
