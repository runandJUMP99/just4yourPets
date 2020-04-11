import React from "react";

function Modal(props) {
    return (
        <div className="modal" style={{
                display: props.show ? "block" : "none",
                opacity: props.show ? 1 : 0,
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                zIndex: props.show ? 102 : 0
            }}>
            <h2 className="modal__alert">you are about to be redirected to another site</h2>
            <h3 className="modal__title">do you want to continue?</h3>
            <div className="modal__actions">
                <button className="modal__action modal__action--negative" onClick={props.onClick} type="button">no!</button>
                <a className="modal__action" href="https://www.storenvy.com/just4yourPets">yes!</a>
            </div>
        </div>
    );
}

export default Modal;

