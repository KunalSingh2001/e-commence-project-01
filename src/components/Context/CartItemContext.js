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

    const allItems = [
        {
            id: 1,
            title: "Colors",
            price: 100,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            quantity: 2,
        },

        {
            id: 2,
            title: "Black and white Colors",
            price: 50,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            quantity: 3,
        },

        {
            id: 3,
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            quantity: 1,
        },
    ];

    return (
        <CartItemContext.Provider value={{ cartItems, setCartItems, allItems }}>
            {children}
        </CartItemContext.Provider>
    );
};

export { CartItemProvider, CartItemContext };
