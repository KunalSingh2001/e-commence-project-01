import React, { useState, useContext } from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import Heading from "../Heading";
import Store from "../Store";
import Modal from "../Portal/Modal";
import Cart from "../Cart";
import { CartItemContext } from "../Context/CartItemContext";

function StoreItems() {
    const { cartItems } = useContext(CartItemContext);
    const [showCart, setShowCart] = useState(false);
    const cartElements = [
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
    function hideShowCart() {
        setShowCart((prev) => !prev);
    }
    return (
        <>
            <Header handleHideShowCart={hideShowCart} />
            <Heading />
            <Store products={cartElements} handleHideShowCart={hideShowCart} />
            {showCart && (
                <Modal onClose={hideShowCart}>
                    <Cart cartIems={cartItems} />
                </Modal>
            )}
            <Footer />
        </>
    );
}

export default StoreItems;
