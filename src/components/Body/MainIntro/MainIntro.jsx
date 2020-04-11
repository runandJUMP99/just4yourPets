import React from "react";
import CTAButton from "../../CTAButton";
import Jumbotron from "./Jumbotron";
import Logo from "../../Logo";

function MainIntro(props) {
    return (
        <div className="main-intro" style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-1000px)",
            zIndex: props.show ? 10 : 0
        }}>
            <Jumbotron />
            <div className="main-intro__bottom">
                <Logo />
                <CTAButton show={props.show} onClick={props.modal}/>
            </div>
        </div>
    );
}

export default MainIntro;