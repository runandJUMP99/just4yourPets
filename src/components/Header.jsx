import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ToggleButton from "./ToggleButton";

function Header() {
    return (
    <div>
        <header className="main-header">
            <ToggleButton />
            <Logo />
            <Nav />
        </header>
        <MobileNav />
    </div>);
}

export default Header;