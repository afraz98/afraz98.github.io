import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";

import { faReact, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render(){
        return (
            <>
                <div className="footer">
                    <Navbar fixed="bottom" className="bg-dark">
                    <Nav>
                        <Nav.Link className="fa-icon" href="https://reactjs.org/"><FontAwesomeIcon icon={faReact}/></Nav.Link>
                        <Nav.Link className="fa-icon" href="https://getbootstrap.com/"><FontAwesomeIcon icon={faBootstrap}/></Nav.Link>
                        <Nav.Link className="fa-icon" href="https://www.github.com/afraz98/"><FontAwesomeIcon icon={faGithub}/></Nav.Link>
                    </Nav>
                    </Navbar>
                </div>
            </>
        );
    }
}

export default Footer;