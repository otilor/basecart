import React, { createContext, useContext, useState } from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Item[];
  addToCart: (item: Item, value: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item, value: number) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((i) => i.id === item.id);

    if (existingItemIndex !== -1) {
      // If item exists in cart, update quantity
      updatedCart[existingItemIndex].quantity = value;
    } else {
      // If item is not in cart, add it
      updatedCart.push(item);
    }

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
}
