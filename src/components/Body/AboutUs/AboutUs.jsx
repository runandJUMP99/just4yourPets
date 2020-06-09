import React from "react";
import Carousel from "./Carousel";

function AboutUs(props) {
    return (
        <div id="about-us"
        style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            zIndex: props.show ? 10 : 0
        }}>
            <div className="about-us__content">
                <Carousel />
                <div className="about-us__text">
                    <h2>we aim to provide a variety of unique, helpful, and <span>fun</span> products for your pet</h2>
                    <div className="about-us__text-divider"></div>
                    <p>toys, costumes, harness... plenty of accessories. come take a look!</p>
                </div>  
            </div>  
        </div>    
    );
}

export default AboutUs;