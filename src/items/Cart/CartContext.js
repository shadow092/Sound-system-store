// context.js

import React, { createContext, useEffect, useState } from "react";

// Create a new context related to cartItems
const CartContext = createContext();

// Create a provider component
const CartContextProvider = ({ children }) => {
  // Define your state variables here
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedCartItems = cartItems.map((cartItem, index) => {
        if (index === itemIndex) {
          const newQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newQuantity,
            productsPrice: item.price * newQuantity,
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, productsPrice: item.price },
      ]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === itemId.id) {
          // If itemId is an object with an id property
          if (item.quantity > 1) {
            // Decrement quantity and recalculate price
            const newQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: newQuantity,
              productsPrice: item.price * newQuantity,
            };
          } else {
            // Quantity is 1, remove the item from the cart
            return null;
          }
        }
        return item;
      })
      .filter(Boolean); // Filter out null values (removed items)
    setCartItems(updatedCartItems);
  };
  useEffect(() => {
    console.log("cartItems changed:", cartItems);
  }, [cartItems]);

  // Return the provider with its value and children
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, removeItemFromCart, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
