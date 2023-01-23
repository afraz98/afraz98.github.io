import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faPython, faReact, faGitlab, faLinux, faJs, faUbuntu } from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
    render() {
        return (
            <div className="main-div" id="skills" style={{ background: "#0b0b0d", color: "white", margin: "0.2em",   display: "flex" }}>
            <section className="div-1">
                <h1 className="heading"> Some tools that help me do what I do. </h1>
                <a href="https://www.docker.com/"><FontAwesomeIcon icon={faDocker} size="4x" className="fa-icon" inverse /></a>
                <a href="https://www.python.org/"><FontAwesomeIcon icon={faPython} size="4x" className="fa-icon" inverse /></a>
                <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} size="4x" className="fa-icon" inverse /></a>
                <a href="https://about.gitlab.com/"><FontAwesomeIcon icon={faGitlab} size="4x" className="fa-icon" inverse /></a>
                <a href="https://www.linux.org/"><FontAwesomeIcon icon={faLinux} size="4x" className="fa-icon" inverse /></a>
                <a href="https://www.javascript.com/"><FontAwesomeIcon icon={faJs} size="4x" className="fa-icon" inverse /></a>
                <a href="https://ubuntu.com/"><FontAwesomeIcon icon={faUbuntu} size="4x" className="fa-icon" inverse /></a>
            </section>
            </div>
        );
    }
}

export default Skills;