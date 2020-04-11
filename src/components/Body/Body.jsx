import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import Backdrop from "../Backdrop";
import CTAButton from "../CTAButton";
import CTAButtonTop from "../CTAButtonTop";
import Footer from "../Footer/Footer";
import Location from "./Location/Location";
import MainIntro from "./MainIntro/MainIntro";
import Modal from "../Modal";

function Body() {

    const [content, setContent] = useState(
        <div>
            <CTAButtonTop show={false} onClick={openModal}/>
            <MainIntro show={true} />
            <AboutUs show={false}/>
            <Location show={false}/>
            <CTAButton show={true} onClick={openModal}/>
        </div>                
        );

    const [modal, setModal] = useState({
        showBackdrop: false,
        showModal: false
    })
    
    function handleClick(content) {
        if (content === "aboutus") {
            setContent(
            <div>
                <CTAButtonTop show={true} onClick={openModal}/>
                <MainIntro show={false}/>
                <AboutUs show={true} />
                <Location show={false}/>
                <CTAButton show={false} onClick={openModal}/>    
            </div>   
            );
        } else if (content === "location") {
            setContent(
            <div>
                <CTAButtonTop show={true} onClick={openModal}/>
                <MainIntro show={false}/>
                <AboutUs show={false}/>
                <Location show={true} />
                <CTAButton show={false} onClick={openModal}/>
            </div>   
            );
        } else {
            setContent(
            <div>
                <CTAButtonTop show={false} onClick={openModal}/>
                <MainIntro show={true} />
                <AboutUs show={false}/>
                <Location show={false}/>
                <CTAButton show={true} onClick={openModal}/>
            </div>   
            );
        }
    }

    function openModal(prevValue) {
        setModal({
            showBackdrop: !prevValue.showBackdrop,
            showModal: !prevValue.showModal
        });
    }

    return (
        <div>
            <Backdrop show={modal.showBackdrop} onClick={openModal} />
            <Modal show={modal.showModal} onClick={openModal} />
            {content}
            <Footer onClick={handleClick} />
        </div>
    )
}

export default Body;