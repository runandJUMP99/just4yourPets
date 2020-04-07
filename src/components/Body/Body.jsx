import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import CTAButton from "../CTAButton";
import Footer from "../Footer/Footer";
import Location from "./Location/Location";
import MainIntro from "./MainIntro/MainIntro";

function Body() {

    const [content, setContent] = useState(
        <div>
            <div className="cta-button__top">
                <CTAButton show={false} />
            </div>
            <MainIntro show={true} />
            <AboutUs show={false}/>
            <Location show={false}/>
            <CTAButton show={true} />
        </div>                
        );
    
    function handleClick(content) {
        if (content === "aboutus") {
            setContent(
            <div>
                <div className="cta-button__top">
                    <CTAButton show={true} />
                </div>
                <MainIntro show={false}/>
                <AboutUs show={true} />
                <Location show={false}/>
                <CTAButton show={false} />    
            </div>   
            );
        } else if (content === "location") {
            setContent(
            <div>
                <div className="cta-button__top">
                    <CTAButton show={true} />
                </div>
                <MainIntro show={false}/>
                <AboutUs show={false}/>
                <Location show={true} />
                <CTAButton show={false} />
            </div>   
            );
        } else {
            setContent(
            <div>
                <div className="cta-button__top">
                    <CTAButton show={false} />
                </div>
                <MainIntro show={true} />
                <AboutUs show={false}/>
                <Location show={false}/>
                <CTAButton show={true} />
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