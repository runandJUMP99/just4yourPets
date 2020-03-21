import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../../../public/images/sleepygrape.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../../public/images/sleepygrape.png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../../../public/images/sleepygrape.png" alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;