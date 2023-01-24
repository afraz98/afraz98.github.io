import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faPython, faReact, faGitlab, faJs, faUbuntu, faSass, faRust } from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
    render() {
        return (
            <div className="skills-div" id="skills">
            <section className="div-1">
                <section className="div-2">
                <h1 className="heading"> Some tools that help me do what I do. </h1>
                    <div className="d-flex justify-content-evenly">
                    <a href="https://www.docker.com/"><FontAwesomeIcon icon={faDocker} className="fa-icon"/></a>
                    <a href="https://www.python.org/"><FontAwesomeIcon icon={faPython} className="fa-icon"/></a>
                    <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} className="fa-icon"/></a>
                    <a href="https://about.gitlab.com/"><FontAwesomeIcon icon={faGitlab} className="fa-icon"/></a>
                    <a href="https://www.javascript.com/"><FontAwesomeIcon icon={faJs} className="fa-icon"/></a>
                    <a href="https://ubuntu.com/"><FontAwesomeIcon icon={faUbuntu} className="fa-icon"/></a>
                    <a href="https://sass-lang.com/"><FontAwesomeIcon icon={faSass} className="fa-icon"/></a>
                    <a href="https://www.rust-lang.org/"><FontAwesomeIcon icon={faRust} className="fa-icon"/></a>
                    </div>
                </section>
            </section>
            </div>
        );
    }
}

export default Skills;