// // src/context/CartContext.js
// import React, { createContext, useState } from 'react';

// // Create a context for the cart
// export const CartContext = createContext();

// // Create a provider component that will wrap your app
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add items to the cart
//   const addToCart = (trip) => {
//     setCartItems((prevItems) => [...prevItems, trip]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (trip) => {
    setCartItems((prevItems) => [...prevItems, trip]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
