import React from "react";

function CTAButton(props) {
    return (
        <ul className="cta-button__container" style={{
                opacity: props.show ? 1 : 0,
                transform: props.show ? "translateY(0)" : "translateY(-1000px)",
                zIndex: props.show ? 10 : 0
            }}>
            <li className="cta-button">
                <button onClick={props.onClick}>start shopping!</button>
            </li>
        </ul>
    );
}

export default CTAButton;