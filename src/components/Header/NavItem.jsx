import React from "react";

function NavItem(props) {
    return ( 
        <div>
            <li className="main-nav__item">
                <a href={props.href}>{props.item}</a>
            </li>
        </div>    
    );
}

export default NavItem;