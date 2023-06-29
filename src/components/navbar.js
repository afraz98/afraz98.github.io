import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends Component {
    render() {
        return (
            <div id="navigation-bar">
                <Navbar className="header-nav" fixed="top" collapseOnSelect bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="brand-name m1-5"> Anthony Frazier </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-5">
                            <Nav.Link className="px-3" href="#home">Home</Nav.Link>
                            <Nav.Link className="px-3" href="#timeline">Timeline</Nav.Link>
                            <Nav.Link className="px-3" href="#skills">Skills</Nav.Link>
                            <Nav.Link className="px-3" href="#contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;