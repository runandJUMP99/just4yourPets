import React from "react";
import wall from "../../../images/wall.jpg";
import bumperStickers from "../../../images/bumper-stickers.jpg";
import adidogs from "../../../images/adidiogs.jpg";
import harness from "../../../images/harness.jpg";
import tigerShirt from "../../../images/tiger-shirt.jpg";
import furJacket from "../../../images/fur-jacket.jpg";

function Carousel() {
    return (
        <div className="about-us__carousel">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="wall" className="d-block w-100" src={wall} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="bumper-stickers" className="d-block w-100" src={bumperStickers} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="adidogs" className="d-block w-100" src={adidogs} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="harness" className="d-block w-100" src={harness} alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="tiger-shirt" className="d-block w-100" src={tigerShirt} alt="Fifth slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="fur-jacket" className="d-block w-100" src={furJacket} alt="Sixth slide" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;