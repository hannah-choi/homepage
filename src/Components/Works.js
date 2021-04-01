import React from "react";
import WorkItem from "./WorkItem";

function Works() {
    const array = [
        {
            link: "http://hannahchoi.net/timezone_react/",
            project: "Timezone Converter",
            tech: ["React", "Redux"],
            img: "/images/timezone.png",
            desc: "A web timezone converter built with React.js, Redux",
        },
        {
            link: "http://imageeditor.hannahchoi.net",
            project: "Image Editor",
            tech: ["React", "MySQL", "Express"],
            img: "/images/imageeditor.png",
            desc: "A web image editor app built with React & Express",
        },
        {
            link: "http://memo.hannahchoi.net",
            project: "Memo",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/memo.png",
            desc:
                "A sticky note web app with CRUD feature. Created with Vanilla JavaScript, MySQL, Express",
        },
        {
            link: "http://jsy.hannahchoi.net",
            project: "OrderSystem",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/jsy.png",
            desc:
                "A virtual cashier dashboard app for the Jing Sheng Yu(Taiwanese tea brand) store",
        },
        {
            link: "http://bookquotes.hannahchoi.net", //pm2 사용?
            project: "Book Quotes",
            tech: ["NodeJS", "MySQL", "Responsive"],
            img: "/images/bookquotes.png",
            desc:
                "A web app with CRUD Features built with Node JS(ejs) & MySQL",
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
                <h4>Featured Works</h4>
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
