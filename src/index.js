import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartItemProvider } from "./components/Context/CartItemContext";
import { AuthProvider } from "./components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <CartItemProvider>
                <App />
            </CartItemProvider>
        </AuthProvider>
    </React.StrictMode>
);
reportWebVitals();
