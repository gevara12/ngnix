import { Dispatch } from 'react';

export interface ShoppingItem {
  id: string;
  name: string;
  purchased: boolean;
  quantity: number;
  createdAt: number;
}

export type ShoppingAction =
  | { type: 'ADD_ITEM'; payload: { name: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'TOGGLE_PURCHASED'; payload: { id: string } }
  | { type: 'UPDATE_ITEM'; payload: { id: string; updates: Partial<ShoppingItem> } }
  | { type: 'INIT_ITEMS'; payload: ShoppingItem[] }
  | { type: 'CLEAR_PURCHASED' };

export const loadItems = (): ShoppingItem[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('shoppingList') || '[]');
};

export const saveItems = (items: ShoppingItem[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('shoppingList', JSON.stringify(items));
};

export const shoppingReducer = (state: ShoppingItem[], action: ShoppingAction): ShoppingItem[] => {
  let newState: ShoppingItem[];

  switch (action.type) {
    case 'ADD_ITEM':
      newState = [
        ...state,
        {
          id: Math.random().toString(36).substring(7),
          name: action.payload.name,
          quantity: action.payload.quantity,
          purchased: false,
          createdAt: Date.now(),
        },
      ];
      break;

    case 'REMOVE_ITEM':
      newState = state.filter(item => item.id !== action.payload.id);
      break;

    case 'TOGGLE_PURCHASED':
      newState = state.map(item =>
        item.id === action.payload.id
          ? { ...item, purchased: !item.purchased }
          : item
      );
      break;

    case 'UPDATE_ITEM':
      newState = state.map(item =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updates }
          : item
      );
      break;

    case 'INIT_ITEMS':
      newState = action.payload;
      break;

    case 'CLEAR_PURCHASED':
      newState = state.filter(item => !item.purchased);
      break;

    default:
      return state;
  }

  saveItems(newState);
  return newState;
};

export const createShoppingActions = (dispatch: Dispatch<ShoppingAction>) => ({
  addItem: (name: string, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { name, quantity } });
  },
  removeItem: (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  },
  togglePurchased: (id: string) => {
    dispatch({ type: 'TOGGLE_PURCHASED', payload: { id } });
  },
  updateItem: (id: string, updates: Partial<ShoppingItem>) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id, updates } });
  },
  clearPurchased: () => {
    dispatch({ type: 'CLEAR_PURCHASED' });
  },
});