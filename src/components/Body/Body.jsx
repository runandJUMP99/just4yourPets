import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import MainIntro from "./MainIntro/MainIntro";
import Location from "./Location/Location";

function Body() {

    const [content, setContent] = useState(
        <div>
            <MainIntro show={true}/>
            <AboutUs show={false}/>
            <Location show={false}/>
        </div>    
        );
    
    function handleClick(content) {
        if (content === "aboutus") {
            setContent(
            <div>
                <MainIntro show={false}/>
                <AboutUs show={true}/>
                <Location show={false}/>
            </div>   
            );
        } else if (content === "location") {
            setContent(
            <div>
                <MainIntro show={false}/>
                <AboutUs show={false}/>
                <Location show={true}/>
            </div>   
            );
        } else {
            setContent(
            <div>
                <MainIntro show={true}/>
                <AboutUs show={false}/>
                <Location show={false}/>
            </div>   
            );
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