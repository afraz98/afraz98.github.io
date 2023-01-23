import React, { Component } from "react";

import NavigationBar from "./components/navbar";
// import Skills from "./components/skills";
// import Contact from "./components/contact";
import Cover from "./components/cover";
import Timeline from "./components/timeline";

class Main extends Component {
    render() {
        return (
            <div className="application">
                <NavigationBar/>
                <Cover/>
                <Timeline/>
            </div>
        );
      }
    }
export default Main;