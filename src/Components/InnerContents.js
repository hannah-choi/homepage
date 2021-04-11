import React from "react";

function Innercontents({ project, tech, desc, live, repo }) {
    const techItem = { tech }.tech.map((item, i) => (
        <span key={i} className="skill">
            {item}
        </span>
    ));

    return (
        <div className="contentsDiv">
            <h4>{project}</h4>
            <div className="skillWrapper">{techItem}</div>
            <p className="skillDesc">{desc}</p>
            <div className="linkWrapper">
                <span key="1" className="links">
                    <a target="_blank" rel="noopener noreferrer" href={live}>
                        Live Demo
                    </a>
                </span>
                <span key="2" className="links">
                    <a target="_blank" rel="noopener noreferrer" href={repo}>
                        Github repo
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Innercontents;
