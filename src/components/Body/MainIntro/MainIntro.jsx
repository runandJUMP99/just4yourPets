import React from "react";

function MainIntro(props) {
    return (
        <div className="main-intro" style={{
            opacity: props.show ? 1 : 0,
            transform: props.show ? "translateY(0)" : "translateY(-1000px)",
            zIndex: props.show ? 10 : 0
        }}>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">hi, i'm bob</h1>
                    <p className="lead">i sell great products, for less!</p>
                </div>
            </div>
        </div>
    );
}

export default MainIntro;