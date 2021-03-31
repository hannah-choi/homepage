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
            <p class="secondary">© 2020 Hannah Choi</p>
            <a
                href="https://github.com/hannah-developer"
                target="_blank"
                rel="nonreferrer"
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
