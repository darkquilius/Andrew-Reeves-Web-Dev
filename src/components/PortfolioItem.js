import React from "react";
import styled from "styled-components";

const PortfolioItem = ({
  title,
  picture,
  pictureAlt,
  description,
  deployedLink,
  githubLink,
}) => {
  return (
    <PortfolioItemStyles>
      <div className="item-front">
        <h2>{title}</h2>
        <div className="image">
          <img src={require(`../images/${picture}.png`)} alt={pictureAlt} />
        </div>
      </div>
      <div className="item-back">
        <p>{description}</p>
        <div className="icons">
          <div className="icon">
            <a href={deployedLink} target="_blank">
              <i className="fas fa-wifi"></i>
              <span>Deployed</span>
            </a>
          </div>
          <div className="icon">
            <a href={githubLink} target="_blank">
              <i className="fas fa-code"></i>
              <br></br>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </PortfolioItemStyles>
  );
};

const PortfolioItemStyles = styled.div`
  position: relative;

  @media screen and (max-width: 800px) {
        width: 300px;
    }

  .item-front {
    text-align: center;
    background-color: rgba(46, 139, 87, 0.8);
    padding: 0 10px;
    border-radius: 15px;
    transition: all 0.4s ease-in-out;
    h2 {
      padding-top: 15px;
    }
    @media screen and (max-width: 1100px) {
      h2 {
        font-size: 20px;
      }
    }
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;

    @media screen and (max-width: 800px) {
        height: 150px;
    }
  }

  .item-back {
    width: 100%;
    height: 100%;
    background-color: rgba(46, 139, 87, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s ease-in-out;
    p {
      max-width: 400px;
      padding: 25px;
      font-style: italic;
    }
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .icon {
        background-color: var(--color-primary);
        border-radius: 50%;
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        line-height: 1rem;
        transition: all 0.4s ease-in-out;
        span {
          font-size: x-small;
        }

        &:hover {
          background-color: var(--color-white);
          i {
            color: var(--color-primary);
          }
          span {
            color: var(--color-primary);
          }
        }
      }
    }

    @media screen and (min-width: 950px),
    screen and (max-width: 1200px) {
        p{
            font-size: 14px;
            padding: 5px 25px;
        }
    }

    @media screen and (max-width: 800px) {
        p{
            font-size: small;
            padding: 5px 25px;
        }
      .icon {
          font-size: small;
        width: 25px !important;
        height: 25px !important;
        span {
          display: none;
        }
      }
    }
  }

  :hover .item-back {
    opacity: 1;
    transform: scale(1);
  }

  :hover .item-front {
    opacity: 0.25;
  }
`;

export default PortfolioItem;
