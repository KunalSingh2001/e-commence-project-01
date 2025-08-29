import React, { createContext, useState } from "react";

const CartItemContext = createContext();

const CartItemProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Colors",
            price: 50,
            quantity: 1,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
            id: 2,
            title: "Black and white Colors",
            price: 50,
            quantity: 1,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
    ]);

    return (
        <CartItemContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartItemContext.Provider>
    );
};

export { CartItemProvider, CartItemContext };
