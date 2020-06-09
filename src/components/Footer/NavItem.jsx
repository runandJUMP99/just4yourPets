import React from "react";

function NavItem(props) {
    return ( 
        <li className="main-nav__item">
            <a onClick={props.onClick}>{props.item}</a>
        </li> 
    );
}

export default NavItem;