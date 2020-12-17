import React from "react";

function Innercontents({ project, tech }) {
    const techItem = { tech }.tech.map((item, i) => (
        <span key={i} className="skills">
            {item}
        </span>
    ));

    return (
        <>
            <h3>{project}</h3>
            <p class="skillDesc">
                Dolor aute aliquip nisi ut aliqua ipsum eu anim mollit laborum.
            </p>
            <div className="skillWrapper">{techItem}</div>
        </>
    );
}

export default Innercontents;
