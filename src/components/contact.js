import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className="contact-div" id="contact">
            <div className="head mx-5">
                <div className="main-div">
                <section className="div-1 contact">
                    <h1 className="my-3 heading" style={{textAlign:"center"}}>Let's work on something together.</h1>
                    <p>
                        If you've read this far, you're probably interested in what I might have to offer to you. I would love to 
                        discuss development opportunities to help better myself.
                    </p>
                    <a href="mailto:anthonymfrazier1998@gmail.com" className="button btn btn-outline-success my-3"> Contact Me </a>
                </section>
                <p className="footer"> Anthony Frazier </p>
                </div>
            </div>
            </div>
        );
    }
};

export default Contact;