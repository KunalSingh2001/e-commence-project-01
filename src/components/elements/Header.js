import React, {useContext} from "react";
import "./Header.css";
import { CartItemContext } from "../Context/CartItemContext";
function Header(props) {
    const {cartItems} = useContext(CartItemContext);
    return (
        <div className="bg-dark text-white d-flex align-items-center py-1 px-4 border-bottom border-2 border-white position-static position-fixed top-1 start-0 w-100">
            <div className="d-flex justify-content-center gap-5 flex-grow-1">
                <span className="fw-bold font-times">Home</span>
                <span className="font-times">Store</span>
                <span className="font-times">About</span>
            </div>
            <button
                type="button"
                className="cart-button"
                onClick={props.handleHideShowCart}
            >
                Cart <span className="cart-count">{cartItems.length}</span>
            </button>
        </div>
    );
}

export default Header;
