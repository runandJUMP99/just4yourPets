import React from "react";
import CTAButton from "../CTAButton";
import NavItem from "./NavItem";

function Nav() {
    return (
        <nav className="main-nav">
            <ul class="main-nav__items">
                <NavItem 
                href="#about-us"
                item="About Us"
                />
                <NavItem 
                href="#location"
                item="Location"
                />
                <CTAButton />
            </ul>
        </nav>
    );
}

export default Nav;