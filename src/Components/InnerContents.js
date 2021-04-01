import React from "react";

function Innercontents({ project, tech, desc }) {
    const techItem = { tech }.tech.map((item, i) => (
        <span key={i} className="skills">
            {item}
        </span>
    ));

    return (
        <>
            <h3>{project}</h3>
            <p className="skillDesc">{desc}</p>
            <div className="skillWrapper">{techItem}</div>
        </>
    );
}

export default Innercontents;
