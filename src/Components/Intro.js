import React from "react";

function Intro() {
    return (
        <div className="intro contents">
            <p className="title">Hannah Choi</p>
            <p className="introbody">JavaScript developer | London</p>
            <div className="introDiv">
                <a
                    className="mail"
                    href="mailto:hannahchoi.developer@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    hannahchoi.developer@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Intro;
