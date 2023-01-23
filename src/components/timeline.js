
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = () => {
    return (
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
    );
}

const ExperienceData = [
    {
        id: "1",
        company: "Cyber Radio Solutions",
        position: "Software Engineer",
        site: "",
        date: "February 2021 - Present",
        text: "Responsible for maintenance of existing production test software packages and development of customer-operated automated test environment.",
        icon: faBriefcase
    },
    
    {
        id: "2",
        company: "University of Maryland, College Park",
        position: "Bachelor's of Science, Computer Engineering",
        date: "August 2016 - December 2020",
        text: "Relevant Coursework: Digital Logic Design, Digital Computer Design, Organization of Programming Languages, Advanced Data Structures, Operating Systems, Microprocessors, Reverse Engineering and Hardware Security, Cryptography",
        icon: faGraduationCap
    },
  ];

export default Timeline;