import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";
import Heading from "./components/Heading";
import Store from "./components/Store";
import Modal from "./components/Portal/Modal";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartItemContext } from "./components/Context/CartItemContext";
function App() {
    const { cartItems } = useContext(CartItemContext);
    const [showCart, setShowCart] = useState(false);
    

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
