import React from "react";
import ReactDOM from "react-dom";
import "../Portal/Modal.css";

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div className="modal">
                {children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default Modal;