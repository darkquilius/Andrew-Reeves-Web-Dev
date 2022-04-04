import styled from "styled-components";

export const MainContent = styled.div`
  .section {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 3rem 15rem;
    transform: translateY(-100%) scale(0);
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 800px) {
      padding: 0 6rem;
    }
  }

  .active {
    display: block !important;
    animation: scaleAnim 0.75s ease-in-out;
    @keyframes scaleAnim {
      0% {
        transform: translateY(-100%) scaleY(0);
      }

      100% {
        transform: translateY(0) scaleY(1);
      }
    }
  }

  .sec1 {
    display: none;
    transform: translateY(0) scale(1);
  }

  .sec2 {
    display: none;
    transform: translateY(0) scale(1);
  }

  .sec3 {
    display: none;
    transform: translateY(0) scale(1);
  }

  .sec4 {
    display: none;
    transform: translateY(0) scale(1);
  }

  .sec5 {
    display: none;
    transform: translateY(0) scale(1);
  }

  .bg-shape-wrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .bg-shape1 {
    transition: all 0.4s ease-in-out;
    width: 100%;
    min-height: 100%;
    height: auto;
    background-color: var(--color-secondary);
    position: absolute;
    overflow-y: auto;
    left: 0;
    top: 0;
    z-index: -1;
    clip-path: polygon(0 0, 25% 0, 50% 100%, 0% 100%);
  }

  .bg-shape2 {
    transition: all 0.4s ease-in-out;
    width: 100%;
    min-height: 100%;
    height: auto;
    background-color: var(--cv-button);
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 50% 100%);
  }

  @media screen and (max-width: 600px) {
    //CONTROLS SECTION
    .theme-btn {
      width: 50px;
      height: 50px;
    }

    .controls {
      top: auto;
      bottom: 0;
      flex-direction: row;
      justify-content: center;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      background-color: var(--color-grey5);
      .control {
        margin: 0.7rem 0.3rem;
      }
    }
    //CONTROLS SECTION

    // PAGE TITLE SECTION
    .main-title {
      h2 {
        display: grid;
        grid-template-rows: 1fr;
        justify-content: center;
        font-size: 3rem !important;
        .me-span{
          color: var(--me-span) !important;
        }
        .bg-text {
          display: none;
        }
      }
    }
    // PAGE TITLE SECTION

    // HEADER SECTION
    .header-content {
      grid-template-columns: 1fr;
      height: fit-content;
      padding-bottom: 4rem;
      .name {
        line-height: 15px;
      }
      .image {
        margin-left: 0;
      }
    }

    .right-header {
      padding: 2rem !important;
      padding-bottom: 2px;
      text-align: center;
    }
    // HEADER SECTION

    //ABOUT ME SECTION
    .about-me-container {
      padding-bottom: 6rem;
    }
    //ABOUT ME SECTION

    // TIMELINE SECTION
    .timeline {
      padding-bottom: 4rem;

      .vertical-timeline-element{
        width: 200px;
        line-height: 15px;
      }

      .vertical-timeline-element-title{
        font-size: 1rem;
      }

      .vertical-timeline-element-subtitle{
        font-size: .7rem;
      }
    }
    // TIMELINE SECTION

    // PORTFOLIO SECTION
    .portfolio {
      padding-bottom: 6rem;
      .portfolio-item{
        transform: translateX(-15%);
      }
    }
    // PORTFOLIO SECTION

    
  }
  @media screen and (max-width: 1350px){
    //CONTACT SECTION
    .contact {
      flex-direction: column;
      .contact-container {
        padding-bottom: 6rem;
      }
      .contact-content {
        padding-top: 1rem;
        flex-direction: column;
        .left-contact {
          h4 {
            font-size: 22px;
          }
          p {
            line-height: 20px;
            font-size: 15px;
          }
          span {
            font-size: 15px;
            word-wrap:break-word;
            max-width:16ch;
          }
        }
        .right-contact {
          flex-direction: column;
          margin-left: 0;
          input,
          input::-webkit-input-placeholder {
            font-size: 10px;
          }
        }
      }
    }
    //CONTACT SECTION
  }
`;
