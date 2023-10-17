import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
return ReactDOM.createPortal (
    <div id="Modal">
        {children}
    </div>,
    document.getElementById('Modal')
);
}

export { Modal }