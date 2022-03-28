import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticleTimelineStyles className="section sec3 timeline" id="timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(50, 205, 50)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(50, 205, 50)" }}
          date="Mar 2021 - present"
          iconStyle={{ background: "rgb(50, 205, 50)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Software Development Engineer</h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Infosys Limited</h4>
          <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
          <br></br>
          <ul>
              <li><i className="fas fa-dot-circle"></i> Write well designed, testable, efficient code using Java</li>
              <li><i className="fas fa-dot-circle"></i> Develop and execute Test Driven Development tests, integration tests, unit tests, and automated tests using tools such as Selenium, Jenkins, Log4J, etc</li>
              <li><i className="fas fa-dot-circle"></i> Work with agile teams to refine requirements and to identify areas for enhancement</li>
              <li><i className="fas fa-dot-circle"></i> Work with other team members to develop a complete and integrated solution; and to deliver quality software and required documentation on time</li>
              <li><i className="fas fa-dot-circle"></i> Ensure that completed code provide all functionality described by application experts to ensure that acceptance criteria are met</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#5bd75b", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #5bd75b" }}
          date="Feb 2021 - Mar 2021"
          iconStyle={{ background: "#5bd75b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Intern
          </h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Tribal III Inc.</h4>
          <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
          <br></br>
          <ul>
              <li><i className="fas fa-dot-circle"></i> Write well designed front end components using modern frameworks such as React</li>
              <li><i className="fas fa-dot-circle"></i> Develop impactful enterprise level user experiences for high traffic web properties</li>
              <li><i className="fas fa-dot-circle"></i> Integrate and visualize data using a variety of APIs</li>
              <li><i className="fas fa-dot-circle"></i> Assist in backend development when required</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#0BDA51", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0BDA51" }}
          date="Mar 2020"
          iconStyle={{ background: "#0BDA51", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Wrote my very first program
          </h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Just For Me</h4>
          <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
          <p>
            Wrote my very first javascript program and never looked back...
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "#2db92d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #2db92d" }}
          date="Feb 2020 - Aug 2020"
          iconStyle={{ background: "#2db92d", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Georgia Tech Full Stack Web Development Program
          </h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
          <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
          <p>
            A 24-week intensive program focused on gaining technical programming
            skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js,
            MySQL, MongoDB, Express and ReactJS.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </VerticleTimelineStyles>
  );
};

const VerticleTimelineStyles = styled.section`
ul{
    list-style-type: disc;
}
li, p{
    font-size: .75rem;
}
`

export default Timeline;
