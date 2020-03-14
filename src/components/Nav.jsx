import React from "react";

function Nav() {
    return (
        <nav className="main-nav">
            <ul class="main-nav__items">
                <li className="main-nav__item">
                    <a href="#location">Location</a>
                </li>
                <li className="main-nav__item">
                    <a href="#about-us">About Us</a>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                    <a href="start-shopping/index.html">Start Shopping!</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;