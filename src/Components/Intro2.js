import React, { useState } from "react";
import { ReactComponent as UpArrow } from "../Components/svg/up-arrow.svg";
import { ReactComponent as DownArrow } from "../Components/svg/down-arrow.svg";

function Intro2() {
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    };

    const herstoryContents = (
        <div className="herStoryDiv">
            I am a developer because I didn't want to stop learning.
            <br />
            <br />I loved to be a designer, but some part of me felt like design
            is only half of it; I constantly desired to convert my vision into
            an actual user experience. That thirst led me to step out of my
            comfort zone. <br />
            <br />
            Demystifying the programming wasn't easy; The endless question of
            'Why this is not working?' or 'Why this is working?', getting used
            to the ugly monospaced fonts... <br />
            <br />
            But when I built the first website with full javascript features on
            my own — when those several code lines brought life to my draft — I
            realised that coding was the better half that I was looking for. I
            never stopped coding since then.
        </div>
    );

    return (
        <>
            <div className="intro">
                <div className="bodytext">
                    I'm JavaScript developer with 4 years of design experience.{" "}
                    <br />
                    <br /> Mostly I write code in Javascript and use React,
                    NodeJS, MySQL. <br />I also love working on Linux web server
                    and database as much as I do the front-end side. <br />
                    <br />
                    I design apps with reusability & user-driven approach in
                    mind. <br />
                    Currently I'm stretching myself, teaching myself JavaScript
                    Algorithms and data structure to go deeper.
                    <br />
                </div>
                <span className="herstory" onClick={() => clickHandler()}>
                    More about me{" "}
                    {open ? (
                        <UpArrow style={{ width: 12 }} />
                    ) : (
                        <DownArrow style={{ width: 12 }} />
                    )}
                </span>
                {open ? herstoryContents : ""}
            </div>
        </>
    );
}

export default Intro2;
