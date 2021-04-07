import React from "react";
import WorkItem from "./WorkItem";

function Works() {
    const array = [
        {
            link: "http://hannahchoi.net/timezone_react/",
            project: "Timezone Converter",
            tech: ["React", "Redux"],
            img: "/images/timezone.png",
            desc:
                "A web timezone converter for scheduling meeting/events across multiple time zones.",
        },
        {
            link: "http://imageeditor.hannahchoi.net",
            project: "Image Editor",
            tech: ["React", "MySQL", "Express"],
            img: "/images/imageeditor.png",
            desc: "A beautiful web image editor with modern photo effects.",
        },
        {
            link: "http://memo.hannahchoi.net",
            project: "Memo",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/memo.png",
            desc:
                "A minimal memo web app. Modularized code using Class for encapsulation and reusability.",
        },
        {
            link: "http://jsy.hannahchoi.net",
            project: "OrderSystem",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/jsy.png",
            desc: "A virtual cashier dashboard app. Modularized with Class.",
        },
        {
            link: "http://bookquotes.hannahchoi.net", //pm2 사용?
            project: "Book Quotes",
            tech: ["NodeJS", "MySQL", "Responsive"],
            img: "/images/bookquotes.png",
            desc:
                " A minimal app with CRUD Features. Utilised server-side rendering(ejs) & MySQL.",
        },
        {
            link: "http://hannahchoi.net/calculator_react",
            project: "Calculator",
            tech: ["React"],
            img: "/images/calculator.png",
            desc: "A web adaptation of iOS calculator built with react.",
        },
    ];

    return (
        <>
            <div className="works contents">
                <h3>Featured Works</h3>
                <p>Each demo has link to its github repo</p>
            </div>
            <ul className="workGallery">
                {array.map(({ link, project, tech, img, desc }, i) => (
                    <WorkItem
                        key={i}
                        link={link}
                        project={project}
                        tech={tech}
                        img={img}
                        desc={desc}
                    />
                ))}
            </ul>
        </>
    );
}

export default Works;
