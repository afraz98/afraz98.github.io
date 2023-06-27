import React, { Component } from "react";

import NavigationBar from "./components/navbar";
import Cover from "./components/cover";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

class Main extends Component {
    render() {
        return (
            <div className="application">
                <NavigationBar/>
                <Cover/>
                <Timeline/>
                <Skills/>
                <Contact/>
            </div>
        );
    }
}

export default Main;