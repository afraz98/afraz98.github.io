import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faPython, faReact, faGitlab, faJs, faUbuntu, faSass, faRust, faGoogle, faSpotify, faSteam, faFontAwesome, faNpm, faBluetooth, faStackOverflow, faRaspberryPi } from "@fortawesome/free-brands-svg-icons";

class Skills extends Component {
    render() {
        return (
            <div className="skills-div" id="skills">
            <section className="skills-div-inner">
                <section className="skills-div-innermost">
                    <h1 className="heading"> Some tools that help me do what I do. </h1>
                    <div className="tool-icon-row">
                        <a href="https://www.docker.com/"><FontAwesomeIcon icon={faDocker} className="fa-icon"/></a>
                        <a href="https://www.python.org/"><FontAwesomeIcon icon={faPython} className="fa-icon"/></a>
                        <a href="https://reactjs.org/"><FontAwesomeIcon icon={faReact} className="fa-icon"/></a>
                        <a href="https://about.gitlab.com/"><FontAwesomeIcon icon={faGitlab} className="fa-icon"/></a>
                        <a href="https://www.javascript.com/"><FontAwesomeIcon icon={faJs} className="fa-icon"/></a>
                        <a href="https://ubuntu.com/"><FontAwesomeIcon icon={faUbuntu} className="fa-icon"/></a>
                        <a href="https://sass-lang.com/"><FontAwesomeIcon icon={faSass} className="fa-icon"/></a>
                        <a href="https://www.rust-lang.org/"><FontAwesomeIcon icon={faRust} className="fa-icon"/></a>
                    </div>
                    <div className="tool-icon-row">
                        <a href="https://www.google.com/"><FontAwesomeIcon icon={faGoogle} className="fa-icon"/></a>
                        <a href="https://open.spotify.com/user/toekneemacaroni"><FontAwesomeIcon icon={faSpotify} className="fa-icon"/></a>
                        <a href="https://store.steampowered.com/"><FontAwesomeIcon icon={faSteam} className="fa-icon"/></a>
                        <a href="https://fontawesome.com/"><FontAwesomeIcon icon={faFontAwesome} className="fa-icon"/></a>
                        <a href="https://www.npmjs.com/"><FontAwesomeIcon icon={faNpm} className="fa-icon"/></a>
                        <a href="https://www.bluetooth.com/"><FontAwesomeIcon icon={faBluetooth} className="fa-icon"/></a>
                        <a href="https://stackoverflow.com/"><FontAwesomeIcon icon={faStackOverflow} className="fa-icon"/></a>
                        <a href="https://www.raspberrypi.org/"><FontAwesomeIcon icon={faRaspberryPi} className="fa-icon"/></a>
                    </div>
                </section>
            </section>
            </div>
        );
    }
}

export default Skills;