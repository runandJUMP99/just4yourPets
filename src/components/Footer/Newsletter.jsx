import React from "react";

function Newsletter() {
    return (
        <div>
            <h4>Sign Up to our Newsletter!</h4>
            <form action="">
                <input type="text" placeHolder="Your Email"/><button class="sign-up__button">Sign up!</button>
            </form>
            <p>*Find out about new items, events, and more!*</p>
        </div>
    );
}

export default Newsletter;