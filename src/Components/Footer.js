import React from "react";
import { ReactComponent as Github } from "./svg/github.svg";
import { ReactComponent as Linkedin } from "./svg/linkedin.svg";

function Footer() {
    return (
        <footer>
            {/* 
            <Linkedin
                className="icon social"
                style={{ width: `20px`, height: `20px` }}
            />{" "} */}
            <p className="secondary">© 2020 Hannah Choi</p>
            <a
                href="https://github.com/hannah-developer"
                a
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github
                    className="github icon"
                    style={{ width: `28px`, height: `28px` }}
                />{" "}
            </a>
        </footer>
    );
}

export default Footer;
