import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {

    const existing = cartItems.find(
      item => item.id === food.id
    );

    if (existing) {

      setCartItems(

        cartItems.map(item =>

          item.id === food.id

            ? {
                ...item,
                quantity: item.quantity + 1
              }

            : item

        )

      );

    } else {

      setCartItems([

        ...cartItems,

        {
          ...food,
          quantity: 1
        }

      ]);

    }

  };

  const increaseQty = (id) => {

    setCartItems(

      cartItems.map(item =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      )

    );

  };

  const decreaseQty = (id) => {

    setCartItems(

      cartItems

        .map(item =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1
              }

            : item

        )

        .filter(item => item.quantity > 0)

    );

  };

  const removeItem = (id) => {

    setCartItems(

      cartItems.filter(item => item.id !== id)

    );

  };

  const clearCart = () => {

    setCartItems([]);

  };

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        increaseQty,

        decreaseQty,

        removeItem,

        clearCart

      }}

    >

      {children}

    </CartContext.Provider>

  );

}
