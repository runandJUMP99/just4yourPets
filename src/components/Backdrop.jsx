import React from "react";

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onClick} style={{
                display: props.show ? "block" : "none",
                opacity: props.show ? 1 : 0,
                transform: props.show ? "translateY(0)" : "translateY(-1000px)",
                zIndex: props.show ? 101 : 0
                }}>
            </div>;
}

export default Backdrop;