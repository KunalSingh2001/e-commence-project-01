import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { CartItemContext } from './Context/CartItemContext';
function ProductDetail() {
    const { productId } = useParams();
    const { allItems } = useContext(CartItemContext)

    const product = allItems.find((item) => item.id === parseInt(productId));
    return (
        <div className="container mt-5">
            <div className="card shadow-lg" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <img
                    src={product.imageUrl}
                    className="card-img-top mt-3"
                    alt={product.title}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">
                        <strong>Price:</strong> ${product.price}
                    </p>
                    <p className="card-text">
                        <strong>Quantity:</strong> {product.quantity}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;