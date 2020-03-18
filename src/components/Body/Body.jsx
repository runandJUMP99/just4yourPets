import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import CTA from "./CTA/CTA";
import MainIntro from "./MainIntro/MainIntro";
import Location from "./Location/Location";

function Body() {
    return (
        <div>
            <MainIntro />
            <AboutUs />
            <Location />
            <CTA />
        </div>
    )
}

export default Body;