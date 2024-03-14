import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (newCharacter, quantity) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((character) => character.id === newCharacter.id);
  
    if (index !== -1) {
      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      const newItem = {
        ...newCharacter,
        quantity,
        subTotal: newCharacter.price * quantity,
      };
      setCart([...cart, newItem]);
    }
  
  };

  const removeItem = (id) => {
    const cartFilter = cart.filter((character) => character.id !== id);
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotals = () => {
    const newTotalItems = cart.reduce((acum, character) => acum + character.quantity, 0);
    setTotalItems(newTotalItems);
    
    const newTotal = cart.reduce((acum, character) => acum + character.price * character.quantity, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotals();
  }, [cart]);

  const contextValues = {
    cart,
    total,
    totalItems,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};