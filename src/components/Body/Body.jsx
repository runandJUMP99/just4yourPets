import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import CTA from "./CTA/CTA";
import Footer from "../Footer/Footer";
import MainIntro from "./MainIntro/MainIntro";
import Location from "./Location/Location";

function Body() {

    const [content, setContent] = useState(<MainIntro />);

    function handleClick(content) {
        if (content === "aboutus" ) {
            setContent(<AboutUs />);
        } else {
            setContent(<Location />);
        }
    }

    return (
        <div>
            {content}
            <Footer 
            onClick={handleClick}/>
        </div>
    )
}

export default Body;