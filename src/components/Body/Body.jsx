import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import CTA from "./CTA/CTA";
import Jumbotron from "./Jumbotron/Jumbotron";
import Location from "./Location/Location";

function Body() {
    return (
        <div>
            <Jumbotron />
            <AboutUs />
            <Location />
            <CTA />
        </div>
    )
}

export default Body;