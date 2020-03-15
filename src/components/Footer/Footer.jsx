import React from "react";

function Footer() {
    return(
        <div>
            <footer className="main-footer">
                <h4>Sign Up to our Newsletter!</h4>
                <input type="text" placeHolder="Your Email"/><button>Sign up!</button>
                <p>*Find out about new items, events, and more!*</p>
            </footer>
        </div>
    );
}

export default Footer;