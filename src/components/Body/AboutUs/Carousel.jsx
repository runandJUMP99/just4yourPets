import React from "react";

function Carousel() {
    return (
        <div className="about-us__carousel">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="wall" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/wall.jpg?alt=media&token=db7392e6-a4fe-45cd-8225-f1bff4d28496" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="bumper-stickers" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/bumper-stickers.jpg?alt=media&token=45d33716-55ff-4ab7-87ad-7ceba2e984bd" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="adidogs" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/adidiogs.jpg?alt=media&token=af19c249-b2d4-4bd4-bf0e-36336ad1be71" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="harness" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/harness.jpg?alt=media&token=8a5998fb-c190-40a2-8abf-9565fd332eb8" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="tiger-shirt" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/tiger-shirt.jpg?alt=media&token=d9fd356e-0d28-48dc-ad55-f62aa44b743a" alt="Fifth slide" />
                    </div>
                    <div className="carousel-item">
                        <img id="fur-jacket" className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/just4yourpets.appspot.com/o/fur-jacket.jpg?alt=media&token=97c0f1f8-34ea-43d9-bdc8-b8ebb584b38b" alt="Sixth slide" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;