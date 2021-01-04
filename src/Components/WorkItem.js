import React from "react";
import Innercontents from "./InnerContents";

function Workitem({ link, project, tech, img, desc }, i) {
    return (
        <li className="workLi">
            <a href={link} target="_blank" rel="nonreferrer">
                <div>
                    <div className="portfolioImg">
                        <img src={img} alt="" className="thumbnail" />
                    </div>
                    <Innercontents project={project} tech={tech} desc={desc} />
                </div>
            </a>
        </li>
    );
}

export default Workitem;
