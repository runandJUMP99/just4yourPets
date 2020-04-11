import React from "react";
import Newsletter from "./Newsletter";
import NavItem from "../Header/NavItem";

function Footer(props) {
    return(
        <div className="main-nav__container">
            <footer className="main-nav">
                <ul className="main-nav__items">
                    <NavItem 
                    href="#home"
                    item="home"
                    onClick={() => props.onClick("home")}
                    />
                    <NavItem 
                    href="#about-us"
                    item="about us"
                    onClick={() => props.onClick("aboutus")}
                    />
                    <NavItem 
                    href="#location"
                    item="location"
                    onClick={() => props.onClick("location")}
                    />
                </ul>
            </footer>
        </div>
    );
}

export default Footer;