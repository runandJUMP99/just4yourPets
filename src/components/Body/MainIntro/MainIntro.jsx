import React from "react";
import CTAButton from "../../Global/CTAButton";
import Jumbotron from "./Jumbotron";

function MainIntro(props) {
    return (
        <div id="main-intro" style={{
        opacity: props.show ? 1 : 0,
        transform: props.show ? "translateY(0)" : "translateY(-1000px)",
        zIndex: props.show ? 10 : 0
        }}>
            <Jumbotron />
            <div className="main-intro__bottom">
                <div className="main-intro__bottom__text">
                    <h1 className="display-4">hi, i'm bob</h1>
                    <p className="lead">i sell great products, for less!</p>
                </div>
                <div className="main-intro__bottom__cta-button">
                    <CTAButton show={props.show} onClick={props.modal}/>
                </div>
            </div> 
        </div>
    );
}

export default MainIntro;