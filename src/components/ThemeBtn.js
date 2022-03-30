import React from "react";
import styled from "styled-components";

const ThemeBtn = ({toggleTheme, setTimelineToggle, timelineToggle}) => {

  return (
    <ThemeBtnStyles className="theme-btn" onClick={() => {
      toggleTheme();
      setTimelineToggle(!timelineToggle)
    }}>
      <i className="fas fa-adjust"></i>
    </ThemeBtnStyles>
  );
};

const ThemeBtnStyles = styled.div`
  top: 5%;
  right: 3%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--color-grey4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 3px 15px rgba(0,0,0,.2);
  transition: all .1s ease-in-out;
  &:active{
      transform: translateY(-5px)
  }
  i{
      font-size: 1.4rem;
      color: var(--color-grey2);
      pointer-events: none;
  }
`;

export default ThemeBtn;
