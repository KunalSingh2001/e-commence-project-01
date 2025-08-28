import React from "react";
import "./Store.css";
function Store(props) {
    return (
        <div className="container">
            <div className="row">
                {props.products.map((item) => (
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center mb-5">
                        <span className="image-title fs-3 mb-3">
                            {item.title}
                        </span>
                        <img
                            src={item.imageUrl}
                            alt="image"
                            style={{ height: "300px", width: "300px" }}
                        />
                        <div className="d-flex gap-5 mt-3">
                            <span className="mb-0">${item.price}</span>
                            <button
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
                >
                    <b>See the cart</b>
                </button>
            </div>
        </div>
    );
}

export default Store;
