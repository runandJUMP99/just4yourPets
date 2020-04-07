import React from "react";
import Carousel from "./Carousel";

function AboutUs(props) {
    return (
        <div className="about-us__container"
        style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            zIndex: props.show ? 10 : 0
        }}>
            <div id="about-us">
                <h2>This is the about us section</h2>
                <p>This is the about us content</p>
                <Carousel />
            </div>    
        </div>    
    );
}

export default AboutUs;