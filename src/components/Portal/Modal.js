import React from "react";
import ReactDOM from "react-dom";
import "../Portal/Modal.css";

const Modal = ({ children, onClose }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className="custom-modal-backdrop" onClick={onClose}>
            <div className="custom-modal" onClick={stopPropagation}>
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default Modal;
