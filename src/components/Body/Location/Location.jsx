import React from "react";
import GoogleMap from "./GoogleMap";

function Location(props) {
    return (
        <div id="location" style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-1000px)",
            zIndex: props.show ? 10 : 0
        }}>
            <div className="location__content">
                <div className="location-text">
                    <h2>come visit us friday, saturday, or sunday at the daytona flea market</h2>
                    <div className="location-text__info">
                        <h5>1425 tomoka farms rd, daytona beach, fl 32124</h5>
                        <p>9 am - 5 pm</p>
                    </div>
                <div className="location-info__divider big"></div>   
                </div>
                <div className="location-info__divider small"></div>                 
                <GoogleMap />
            </div>
        </div>
    );
}

export default Location;