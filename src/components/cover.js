import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Imports for the cool halo effect.
// Thanks Vanta -- https://github.com/tengbao/vanta
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'

class Cover extends Component {
  constructor(){
    super()
    this.vanta_ref = React.createRef()
  }

  componentDidMount() {
    // Where the magic happens
    this.vanta_effect = HALO({
      el: this.vanta_ref.current,
      THREE: THREE,
      backgroundColor: 0x0b0b0b,
      baseColor: 0xd4d3e
    })
  }

  componentWillUnmount(){
    if(this.vanta_effect) this.vanta_effect.destroy()
  }

  render() {
  return (
    <div ref={this.vanta_ref} className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hi, my name is Anthony Frazier.</h1>
              <h1 className="head-div-third-text"> Welcome to my weird world. </h1>
              <p className="head-div-fourth-text"> I'm a software developer from Maryland looking to change the world. </p>
            </section>
        </div>
      </div>

      <div className="social-media">
          <ul className="social-media-list">
            {SocialData.map((data, ind) => {
              return (
                <li key={data + ind}>
                  <a className="social-media-list-link" href={data.link} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={data.icon}/> </a>
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  );
};
}

const SocialData = [
    {
      name: "Github",
      link: "https://github.com/afraz98",
      icon: faGithub,
    },
    
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/anthony-frazier-73b561202/",
      icon: faLinkedin,
    },
];  

export default Cover;

