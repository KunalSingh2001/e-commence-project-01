import React from "react";
import ReactDOM from "react-dom";
import "../Portal/Modal.css";

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="custom-modal-backdrop">
            <button className="close-btn" onClick={onClose}>
                ✖
            </button>
            <div className="custom-modal">{children}</div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default Modal;
