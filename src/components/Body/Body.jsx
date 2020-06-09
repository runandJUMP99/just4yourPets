import React, {useState} from "react";
import AboutUs from "./AboutUs/AboutUs";
import Backdrop from "../Global/Backdrop";
import CTAButtonTop from "../Global/CTAButtonTop";
import Footer from "../Footer/Footer";
import Location from "./Location/Location";
import Logo from "../Global/Logo";
import MainIntro from "./MainIntro/MainIntro";
import Modal from "../Global/Modal/Modal";

function Body() {

    const [content, setContent] = useState(
        <div>
            <CTAButtonTop show={false} onClick={openModal}/>
            <MainIntro show={true} modal={openModal}/>
            <AboutUs show={false}/>
            <Location show={false}/>
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
                <MainIntro show={false} modal={openModal}/>
                <AboutUs show={true} />
                <Location show={false}/>    
            </div>   
            );
        } else if (content === "location") {
            setContent(
            <div>
                <CTAButtonTop show={true} onClick={openModal}/>
                <MainIntro show={false} modal={openModal}/>
                <AboutUs show={false}/>
                <Location show={true} />
            </div>   
            );
        } else {
            setContent(
            <div>
                <CTAButtonTop show={false} onClick={openModal}/>
                <MainIntro show={true} modal={openModal}/>
                <AboutUs show={false}/>
                <Location show={false}/>
            </div>   
            );
        }
    }

    function openModal() {
        setModal(prevValue => {
            return {
                showBackdrop: !prevValue.showBackdrop,
                showModal: !prevValue.showModal
            };
        });
    }

    return (
        <div>
            <Backdrop show={modal.showBackdrop} onClick={openModal} />
            <Modal show={modal.showModal} onClick={openModal} />
            <Logo />
            {content}
            <Footer onClick={handleClick} />
        </div>
    )
}

export default Body;