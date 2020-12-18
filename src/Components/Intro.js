import React from "react";

function Intro() {
    return (
        <>
            <div className="intro contents">
                <h2>
                    Hannah Choi
                    <br />
                    <br />A London-based
                    <br />
                    frontend developer
                    <br />
                    with design background.
                    <br />
                    <br />
                </h2>
                <br />
                <div class="introDiv">
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
        </>
    );
}

export default Intro;
