import React from "react";
import Newsletter from "./Newsletter";
import NavItem from "../Header/NavItem";

function Footer() {
    return(
        <div>
            <footer className="main-footer">
                <Newsletter />
                <ul class="main-footer__items">
                    <NavItem 
                    href="#about-us"
                    item="About Us"
                    />
                    <NavItem 
                    href="#location"
                    item="Location"
                    />
                </ul>
            </footer>
        </div>
    );
}

export default Footer;