import React from "react";
import WorkItem from "./WorkItem";

function Works() {
    const array = [
        {
            link: "http://3.8.120.144:8440/",
            project: "Memo",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "http://placehold.it/800x650",
            desc:
                "Memo is A sticky note web app with a simple login feature. Created with JavaScript, mySQL and Express.",
        },
        {
            link: "http://3.8.120.144:8080/",
            project: "OrderSystem",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "http://placehold.it/800x650",
            desc:
                "A virtual cashier dashboard app for the Jing Sheng Yu(Taiwanese tea brand) store",
        },
        {
            link: "https://github.com/hannah-developer/timezone_converter",
            project: "Timezone Converter",
            tech: ["JavaScript", "React", "Redux"],
            img: "http://placehold.it/800x650",
            desc: "Timezone converter built with React & Redux.",
        },
        {
            link: "http://3.8.120.144:3000/",
            project: "TodoList",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "http://placehold.it/800x650",
            desc: "",
        },
        {
            link: "http://3.8.120.144:8000/", //pm2 사용?
            project: "Book Quotes",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "http://placehold.it/800x650",
            desc: "",
        },
        {
            link: "http://3.8.120.144/calculator/",
            project: "Calculator",
            tech: ["JavaScript"],
            img: "http://placehold.it/800x650",
            desc: "",
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
