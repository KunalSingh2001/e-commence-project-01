import React, { createContext, useState, useEffect } from "react";

const CartItemContext = createContext();

const CartItemProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const currentUserEmail = localStorage.getItem('email')
    useEffect(() => {
        async function fetchCart() {
            try {
                const res = await fetch("https://crudcrud.com/api/b9755a91784b4edd8a2971bde92ae4d4/Cart");
                const data = await res.json();
                console.log('dthbchba', data);
                const userCart = data.filter((item) => item.email === currentUserEmail);
                console.log('dta', userCart);
                setCartItems(userCart);
            } catch (err) {
                console.error("Error fetching cart:", err);
            }
        }

        fetchCart();
    }, [currentUserEmail]);

    async function addToCart(data) {
        try {
            const res = await fetch("https://crudcrud.com/api/b9755a91784b4edd8a2971bde92ae4d4/Cart");
            console.log('response', res)
            const items = await res.json();

            const existingItem = items.find(
                (item) => item.email === currentUserEmail && item.id === data.id
            );

            if (existingItem) {
                console.log('ites s dcsdjc sc nsjdjsncnsm');
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                };

                await fetch(
                    `https://crudcrud.com/api/b9755a91784b4edd8a2971bde92ae4d4/Cart/${existingItem._id}`,
                    {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedItem),
                    }
                );
                console.log("Quantity updated:", updatedItem);
            } else {
                const newItem = {
                    ...data,
                    quantity: 1,
                };

                await fetch("https://crudcrud.com/api/b9755a91784b4edd8a2971bde92ae4d4/Cart", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newItem),
                });
                console.log("New item added:", newItem);
            }
        } catch (err) {
            console.error("Error in addToCart:", err);
        }
    }

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
        <CartItemContext.Provider value={{ cartItems, setCartItems, allItems, addToCart }}>
            {children}
        </CartItemContext.Provider>
    );
};

export { CartItemProvider, CartItemContext };
