import React from "react";
import AboutUs from "./AboutUs";
import Jumbotron from "./Jumbotron";
import Location from "./Location";

function Body() {
    return (
        <div>
            <Jumbotron />
            <Location />
            <AboutUs />
        </div>
    )
}

export default Body;