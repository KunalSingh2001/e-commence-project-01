import React from "react";
import "./Cart.css";

function Cart(props) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartIems.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src={item.imageUrl}
                                        className="cart-image"
                                    />
                                    <br />
                                    {item.title}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.quantity}
                                        className="me-2"
                                        style={{
                                            width: "28px",
                                            border: "1px solid skyblue",
                                        }}
                                    />
                                    <button
                                        className="btn btn-danger"
                                        style={{
                                            height: "35px",
                                            width: "84px",
                                        }}
                                    >
                                        REMOVE
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Cart;
