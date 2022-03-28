import React from "react";
import styled from "styled-components";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  return (
    <PortfolioStyles className="section sec4 portfolio" id="portfolio">
      <div className="main-title">
        <h2>
          My{" "}
          <span className="me-span">
            Portfolio<span className="bg-text">My Portfolio</span>
          </span>
        </h2>
        <p className="header-text">This is a collection of my favorite projects. I hope you enjoy!</p>
      </div>
      <PortfolioItems />
    </PortfolioStyles>
  );
};

const PortfolioStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;

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
`;

export default Portfolio;
