import React from "react";

function CTAButtonTop(props) {
 
    let styles = {
        animation: props.show && "wiggle 600ms 2s 2 linear",
        bottom: "initial",
        left: "initial",
        position: "fixed",
        right: "1rem",
        top: "1rem",
        opacity: props.show ? 1 : 0,
        transform: props.show ? "translateY(0)" : "translateY(-1000px)",
        zIndex: props.show ? 10 : 0
    }
 
    return (
        <ul className="cta-button__container" style={styles}>
            <li className="cta-button">
                <a href="https://www.storenvy.com/just4yourPets">Start Shopping!</a>
            </li>
        </ul>
    );
}

export default CTAButtonTop;