import styled from "styled-components";
import myPhoto2 from "../images/myPhoto2.png";
import React from "react";

const Header = () => {
  return (
    <HeaderStyles className="section sec1 active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="image">
            <img src={myPhoto2} alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Welcome to my portfolio page!<br></br>
            <br></br> My name is{" "}
            <span className="name-span">Andrew Reeves.</span>
            <br></br>
            <br></br>
            Web Developer
          </h1>
          <p>
            I am a full-stack developer with professional education credits from
            Georgia Institute of Technology. I am all in on new technologies,
            making fluid, good-looking apps, and that fun feeling you get in the
            development stages when you take an idea from nothing and turn it
            into something. My main skills are in the MERN stack and I love
            working with React. Take a look at my portfolio!
          </p>
          <div className="btn-container">
            <a
              href={require("../pdf/AndrewReeves2022.pdf")}
              download="AndrewReeves2022.pdf"
              rel="noreferrer"
              className="main-btn"
            >
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  height: 100vh;
  color: var(--color-white);
  width: fit-content;

  img {
    width: 280px;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
    border-radius: 50%;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0);
    }

    @media screen and (max-width: 1050px) {
      width: 160px;
    }
    @media screen and (min-width: 1800px) {
      width: 380px;
    }
  }

  .image {
    transition: all 0.4s ease-in-out;
    margin-left: 4rem;
    float: right;
  }

  .header-content {
    background-color: var(--container-shading);
    padding: 20px 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    @media screen and (max-width: 1200px) {
      transition: all 0.4s ease-in-out;
    width: fit-content;
    .right-header{
      padding-left: 1rem;
      .name{
        font-size: 1rem;
      }
      p{
        font-size: 10px;
      }
    }
    }
  }

  .left-header {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .right-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    p {
      max-width: 500px;
      padding-bottom: 15px;
      font-size: .75rem;
    }
    .name {
      max-width: 500px;
      padding-bottom: 15px;
      font-size: 1.5rem;
    }

    span{
        text-decoration: underline;
    }

    .name-span{
        text-decoration-color: #0b562a;
    }
  }
  }

  .btn-container{
      display: flex;
      align-self: flex-start;

  .main-btn{
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

      .btn-text{
          padding: 0 2rem;
          text-decoration: none;
          @media screen and (max-width: 1200px), screen and (max-height: 600px) {
        padding: 0 1rem;
        font-size: small;
    }
      }

      .btn-icon{
          background-color: var(--color-grey5);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 1rem;
          @media screen and (max-width: 1200px), screen and (max-height: 600px) {
        padding: .5rem;
    }
      }
  }
`;

export default Header;
