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

  .bg-shape-wrap{
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
    background-color: #15753d;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 50% 100%);
  }
`;
