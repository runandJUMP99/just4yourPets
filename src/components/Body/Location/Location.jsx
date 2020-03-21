import React from "react";
import GoogleMap from "./GoogleMap";

function Location() {
    return (
        <div id="location">
            <h2>Come visit us Friday, Saturday, or Sunday at the Daytona Flea Market</h2>
            <h5>1425 Tomoka Farms Rd, Daytona Beach, FL 32124</h5>
            <p>9 am - 5 pm</p>
            <GoogleMap />
        </div>
    );
}

export default Location;