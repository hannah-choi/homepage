import React from "react";
import Innercontents from "./InnerContents";

function Workitem({ link, project, tech, img }, i) {
    return (
        <li className="workLi">
            <a href={link} target="_blank" rel="nonreferrer">
                <div>
                    <div className="portfolioImg">
                        <img src={img} alt="" className="thumbnail" />
                    </div>
                    <Innercontents project={project} tech={tech} />
                </div>
            </a>
        </li>
    );
}

export default Workitem;
