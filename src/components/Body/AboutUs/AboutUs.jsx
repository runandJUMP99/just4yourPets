import React from "react";
import Carousel from "./Carousel";

function AboutUs() {
    return (
        <div class="about-us__container">
            <div id="about-us">
                <h2>This is the about us section</h2>
                <p>This is the about us content</p>
                <Carousel />
            </div>    
        </div>    
    );
}

export default AboutUs;