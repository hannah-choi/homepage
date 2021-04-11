import React from "react";
import Innercontents from "./InnerContents";

function Workitem({ link, project, tech, img, desc, repo, live }, i) {
    return (
        <li className="workLi">
            <div className="portfolioImg">
                <img src={img} alt="" className="thumbnail" />
            </div>
            <Innercontents
                project={project}
                tech={tech}
                desc={desc}
                repo={repo}
                live={live}
            />
        </li>
    );
}

export default Workitem;
