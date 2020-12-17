import React from "react";
import { ReactComponent as Github } from "./svg/github.svg";
import { ReactComponent as Linkedin } from "./svg/linkedin.svg";

function Footer() {
    return (
        <footer>
            <Github
                className="icon social"
                style={{ width: `20px`, height: `20px` }}
            />{" "}
            <Linkedin
                className="icon social"
                style={{ width: `20px`, height: `20px` }}
            />{" "}
        </footer>
    );
}

export default Footer;
