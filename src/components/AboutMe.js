import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutMeStyles className="section sec2 about" id="about">
      <div className="main-title">
        <h2>
          About{" "}
          <span className="me-span">
            Me<span className="bg-text">About Me</span>
          </span>
        </h2>
      </div>
      <div className="about-me-container">
        <p className="about-me-info">
          I am an Atlanta native, born and raised. I recieved my Bachelors
          degree from Georgia State University in Political Science in January
          of 2018. I paid for all of my own classes and took full loads for 3
          years until I graduated early. After college, I began working for a
          number of non-profit organizations such as Georgia Public Broadcasting
          and the United Nations High Council on Refugees. I worked with these
          organizations gathering support in the way of monthly donations until
          April of 2020 when the COVID 19 pandemic hit and a furlough came my
          way. <br></br>
          <br></br>Rather than wasting my time during the pandemic, I went back
          to school at the Georgia Institute of Technology. I studied Full Stack
          Web Development and became a wiz at software development. In my tenure
          at GT, I learned a number of tools and languages used in modern web
          design. I am now fluent in javascript, love coding different
          applications using React, and can work with a multitude of different
          databases, both relational and non-relational in nature. Check out my
          projects on my portfolio page!<br></br>
          <br></br>
          In my free time, I love video games. Fun fact about me:
          <br></br> I own every generation of{" "}
          <i className="fas fa-gamepad"></i> Playstation{" "}
          <i className="fas fa-gamepad"></i> that has been put on the market.
          <br></br>
          <br></br>I also enjoy playing <i className="fas fa-guitar"></i> guitar{" "}
          <i className="fas fa-guitar"></i> and going{" "}
          <i className="fas fa-campground"></i> camping{" "}
          <i className="fas fa-campground"></i> with my{" "}
          <i className="fas fa-female"></i> wife <i className="fas fa-female"></i> and{" "}
          <i className="fas fa-dog"></i> dog <i className="fas fa-dog"></i>
          <br></br>
          <br></br>
          If you would like to know more about me and my skills, feel free to
          download my CV or just contact me. I hope to meet you soon!
        </p>
        <div className="btn-container">
          <a href="" rel="noreferrer" className="main-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </AboutMeStyles>
  );
};

const AboutMeStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;

  .main-title {
    text-align: center;
    padding: 20px 0;

    h2 {
      position: relative;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 700;
      white-space: nowrap;
      .me-span {
        color: var(--color-secondary);
      }
      .bg-text {
        position: absolute;
        top: 50%;
        left: 50%;
        color: var(--color-grey5);
        transition: all 0.4s ease-in-out;
        z-index: -1;
        transform: translate(-50%, -50%);
        font-weight: 700;
        font-size: 5rem;
        @media screen and (max-width: 850px) {
          font-size: 4.25rem;
          left: 75%;
        }
      }
    }
  }

  .about-me-container {
    background-color: var(--container-shading);
    padding: 20px 10px;
    border-radius: 10px;

    i {
      font-size: 1.2rem;
      color: var(--color-grey2);
      pointer-events: none;
    }

    .about-me-info {
      padding-bottom: 15px;
      @media screen and (max-width: 1200px) {
        font-size: 12px;
      }
    }
    .btn-container {
      display: flex;
      align-self: flex-start;

      .main-btn {
        border-radius: 30px;
        color: inherit;
        background-color: var(--cv-button);
        font-weight: 600;
        position: relative;
        border: 1px solid var(--color-white);
        display: flex;
        align-self: flex-start;
        align-items: center;
        overflow: hidden;

        .btn-text {
          padding: 0 2rem;
          @media screen and (max-width: 1200px),
            screen and (max-height: 600px) {
            padding: 0 1rem;
            font-size: small;
          }
        }

        .btn-icon {
          background-color: var(--color-grey5);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 1rem;
          @media screen and (max-width: 1200px),
            screen and (max-height: 600px) {
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;

export default AboutMe;
