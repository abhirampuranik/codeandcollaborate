import React from 'react';

var style = {
    backgroundColor: "#D81E5B",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
}

function Footer() {
    return (
        <div>
            {/* <div style={phantom} /> */}
            <div style={style}>
                <h5>Copyrights 2020</h5>
            </div>
        </div>
    )
}

export default Footer