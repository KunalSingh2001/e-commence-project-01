import React, { useContext } from "react";
import "./Store.css";
import { CartItemContext } from "./Context/CartItemContext";
import { Link } from "react-router-dom";

function Store(props) {
    const { setCartItems, cartItems, addToCart } = useContext(CartItemContext);
    function addinToCart(id) {
        const userEmail = localStorage.getItem('email')
        let checkAlreadyExits = cartItems.find((item) => item.id === id);
        let addedItem = props.products.find((item) => item.id === id);
        const data = {
            ...addedItem,
            email: userEmail,
            quantity: 1
        };
        addToCart(data);
        if (checkAlreadyExits) {
                setCartItems((prev) =>prev.map((item) => item.id === id? {...item, quantity: item.quantity + 1} : item));



        }else {
            setCartItems((prev) => [...prev, addedItem]);
            
        }
    }


    return (
        <div className="container">
            <div className="row">
                {props.products.map((item) => (
                    <div
                        key={item.id}
                        className="col-6 d-flex flex-column justify-content-center align-items-center mb-5"
                    >
                        <span className="image-title fs-3 mb-3">
                            {item.title}
                        </span>
                        <Link to={`/store/${item.id}`}>
                            <img
                                src={item.imageUrl}
                                alt="image"
                                style={{ height: "300px", width: "300px" }}
                            />
                        </Link>
                        <div className="d-flex gap-5 mt-3">
                            <span className="mb-0">${item.price}</span>
                            <button onClick={() => addinToCart(item.id)}
                                className="btn btn-info"
                                style={{ color: "white" }}
                            >
                                <b>ADD TO CART</b>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-secondary"
                    style={{ color: "skyblue", fontWeight: "bold" }}
                    onClick={props.handleHideShowCart}
                >
                    <b>See the cart</b>
                </button>
            </div>
        </div>
    );
}

export default Store;
