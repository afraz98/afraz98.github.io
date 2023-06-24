import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Timeline extends Component { 
    render() {
    return (
    <div id="timeline">
      <Container>
        <Row>
          <Col>
            <ul className="timeline">
            {
                ExperienceData.map(item => {
                    return (
                      <li className="timeline-item" key={item.id}>
                        <div className="timeline-badge"> <FontAwesomeIcon icon={item.icon}/> </div>
                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <div className="timeline-heading-div">
                              <h4 className="timeline-title">{item.company}</h4>
                              <span> | </span>
                              <p style={{fontSize:"17px",opacity:"0.4"}}>{item.date}</p>
                            </div>
                            <p className="text">{item.position}</p>
                          </div>
                          <div className="timeline-body">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </li>
                    );
                })
            }
            </ul>
          </Col>
        </Row>
      </Container>
      </div>
    );
}
}

const ExperienceData = [
    {
      id: "1",
      company: "Johns Hopkins University Applied Physics Laboratory",
      position: "Embedded Software Engineer",
      site: "",
      date: "July 2023 - ",
      text: "",
      icon: faBriefcase
    },
    
    {
      id: "2",
      company: "Cyber Radio Solutions",
      position: "Software Engineer",
      site: "",
      date: "February 2021 - June 2023",
      text: `Developed an automated testing environment for external customers to evaluate the performance of purchased radios in an effort to reduce return merchandise authorization requests for shipped radios. 
      Collaborated with project managers and other management bodies with similar interests to define requirements for a final customer deliverable. 
      Led regular meetings with the software development team in order to identify software requirements and areas of difficulty in day-to-day development operations. 
      Reviewed and accepted merge requests across several different feature branches to ensure code developed in parallel would incorporate properly. 
      Mentored one junior software engineer on software development practices, regularly evaluating development performance and identifying potential areas of improvement.`,
      icon: faBriefcase
    },
    
    {
      id: "3",
      company: "Leonardo DRS",
      position: "RF Engineering Intern",
      date: "June 2019 - August 2019",
      text: 'Compiled and analyzed data for a microwave tuner to ensure that customers understood how certain units performed in certain frequency bands.\n' + 
      'Tested a microwave tuner over temperature allowing engineering staff to evaluate how the tuner performs from -40°C to +70°C.\n' + 
      'Designed and optimized a microwave filter to ensure proper passband response and out of band rejection as specified by a customer.',
      icon: faBriefcase
    },

    {
      id: "4",
      company: "University of Maryland, College Park",
      position: "Bachelor's of Science, Computer Engineering",
      date: "August 2016 - December 2020",
      text: "Relevant Coursework: Digital Logic Design, Digital Computer Design, Organization of Programming Languages, Advanced Data Structures, Operating Systems, Microprocessors, Reverse Engineering and Hardware Security, Cryptography",
      icon: faGraduationCap
    },
  ];

export default Timeline;