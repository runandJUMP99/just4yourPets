import React from "react";

function Modal(props) {
    return (
        <div className="shopping-modal" style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}>
            <h2 className="shopping-modal__alert">to continue shopping, you will be redirected to another site</h2>
            <h3 className="shopping-modal__title">do you wish to continue?</h3>
            <div className="shopping-modal__actions">
                <button className="shopping-modal__action shopping-modal__action--negative" onClick={props.onClick} type="button">no!</button>
                <a className="shopping-modal__action" href="https://www.storenvy.com/stores/1332499-just4yourpets">yes!</a>
            </div>
        </div>
    );
}

export default Modal;

