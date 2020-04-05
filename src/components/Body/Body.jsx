import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import MainIntro from "./MainIntro/MainIntro";
import Location from "./Location/Location";

function Body() {

    const [content, setContent] = useState(<MainIntro />);
    
    function handleClick(content) {
        if (content === "aboutus") {
            setContent(<AboutUs show="true"/>);
        } else if (content === "location") {
            setContent(<Location />);
        } else {
            setContent(<MainIntro />);
        }
    }

    return (
        <div>
            {content}
            <Footer 
            onClick={handleClick}
            />
        </div>
    )
}

export default Body;