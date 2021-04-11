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
            repo: "https://github.com/hannah-developer/timezoneconverter_react",
            live: "http://hannahchoi.net/timezone_react/",
        },
        {
            link: "http://imageeditor.hannahchoi.net",
            project: "Image Editor",
            tech: ["React", "MySQL", "Express"],
            img: "/images/imageeditor.png",
            desc:
                "A minimal web image editor with various modern photo effects. Utilized Multer, React and Canvas API.",
            repo: "https://github.com/hannah-developer/image_editor",
            live: "http://imageeditor.hannahchoi.net",
        },
        {
            link: "http://memo.hannahchoi.net",
            project: "Memo",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/memo.png",
            desc:
                "A minimal memo web app built with Vanilla JavaScript. Modularized code using Class for encapsulation and reusability.",
            repo: "https://github.com/hannah-developer/memo",
            live: "http://memo.hannahchoi.net",
        },
        {
            link: "http://jsy.hannahchoi.net",
            project: "OrderSystem",
            tech: ["JavaScript", "MySQL", "Express"],
            img: "/images/jsy.png",
            desc:
                "A virtual cashier dashboard app built with Vanilla JavaScript. Modularized with Class.",
            repo: "https://github.com/hannah-developer/ordersystem",
            live: "http://jsy.hannahchoi.net",
        },
        {
            link: "http://bookquotes.hannahchoi.net", //pm2 사용?
            project: "Book Quotes",
            tech: ["NodeJS", "MySQL", "Responsive"],
            img: "/images/bookquotes.png",
            desc:
                " A minimal app with CRUD Features. Utilised server-side rendering(ejs) & MySQL.",
            repo: "https://github.com/hannah-developer/book_quotes",
            live: "http://bookquotes.hannahchoi.net",
        },
    ];

    return (
        <>
            <div className="works contents">
                <h3>Featured Works</h3>
            </div>
            <ul className="workGallery">
                {array.map(
                    ({ link, project, tech, img, desc, repo, live }, i) => (
                        <WorkItem
                            key={i}
                            link={link}
                            project={project}
                            tech={tech}
                            img={img}
                            desc={desc}
                            repo={repo}
                            live={live}
                        />
                    )
                )}
            </ul>
        </>
    );
}

export default Works;
