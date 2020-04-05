import React from "react";
import Newsletter from "./Newsletter";
import NavItem from "../Header/NavItem";

function Footer(props) {
    return(
        <div>
            <footer className="main-footer">
                <ul class="main-footer__items">
                    <NavItem 
                    href="#home"
                    item="Home"
                    onClick={() => props.onClick("home")}
                    />
                    <NavItem 
                    href="#about-us"
                    item="About Us"
                    onClick={() => props.onClick("aboutus")}
                    />
                    <NavItem 
                    href="#location"
                    item="Location"
                    onClick={() => props.onClick("location")}
                    />
                </ul>
            </footer>
        </div>
    );
}

export default Footer;