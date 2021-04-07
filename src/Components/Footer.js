import React from "react";
import { ReactComponent as Github } from "./svg/github.svg";
import { ReactComponent as Linkedin } from "./svg/linkedin.svg";

function Footer() {
    return (
        <footer>
            <p className="secondary">© 2020 - 2021 Hannah Choi</p>
            <div class="sns">
                <a
                    href="https://www.linkedin.com/in/hannahchoi-developer"
                    a
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin
                        className="icon linkedIn"
                        style={{ width: `28px`, height: `28px` }}
                    />
                </a>

                <a
                    href="https://github.com/hannah-developer"
                    a
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github
                        className="github icon"
                        style={{ width: `28px`, height: `28px` }}
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
