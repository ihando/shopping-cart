import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [totalItems, setTotalItems] = useState(0);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  useEffect(() => {
    let cartNumber = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        cartNumber += cartItems[item];
      }
    }
    setTotalItems(cartNumber);
  }, [cartItems]);
  const addToCart = (itemId, number) => {
    setTotalItems((prev) => prev + number);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + number }));
  };

  const removeFromCart = (itemId) => {
    setTotalItems((prev) => prev - 1);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    totalItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
