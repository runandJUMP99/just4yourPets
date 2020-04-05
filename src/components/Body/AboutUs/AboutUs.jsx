import React from "react";
import Carousel from "./Carousel";

function AboutUs(props) {
    console.log(props.show);

    return (
        <div className="about-us__container"
        style={{
            transform: props.show ? "translateX(0)" : "translateX(-100vh)"
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