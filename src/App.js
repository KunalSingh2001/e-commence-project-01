import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";
import Heading from "./components/Heading";
import Store from "./components/Store";
import Modal from "./components/Portal/Modal";
import Cart from "./components/Cart";
import { CartItemContext } from "./components/Context/CartItemContext";
function App() {
    const { cartItems } = useContext(CartItemContext);
    const [showCart, setShowCart] = useState(false);
    const cartsArr = [
        {
            id: 1,
            title: "Colors",
            price: 100,
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
        {
            id: 3,
            title: "Yellow and Black Colors",
            price: 70,
            quantity: 1,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
            id: 4,
            title: "Blue Color",
            price: 100,
            quantity: 1,
            imageUrl:
                "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    function hideShowCart() {
        setShowCart((prev) => !prev);
    }

    return (
        <>
            <Header handleHideShowCart={hideShowCart} />
            <Heading />
            <Store products={cartsArr} handleHideShowCart={hideShowCart} />
            {showCart && (
                <Modal onClose={hideShowCart}>
                    <Cart cartIems={cartItems} />
                </Modal>
            )}
            <Footer />
        </>
    );
}

export default App;
