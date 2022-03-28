import styled from "styled-components";
import React from "react";

const Controls = ({sectionSelect}) => {
  return (
    <ControlStyles className="controls">
      <div className="control control-1 active-btn" data-id="home" onClick={(e) => sectionSelect(e)}>
        <i className="fas fa-home"></i>
      </div>
      <div className="control control-2" data-id="about" onClick={(e) => sectionSelect(e)}>
        <i className="fas fa-laugh"></i>
      </div>
      <div className="control control-3" data-id="timeline" onClick={(e) => sectionSelect(e)}>
      <i className="fas fa-user-clock"></i>
      </div>
      <div className="control control-4" data-id="portfolio" onClick={(e) => sectionSelect(e)}>
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="control control-5" data-id="contact" onClick={(e) => sectionSelect(e)}>
      <i className="fas fa-phone-alt"></i>
      </div>
    </ControlStyles>
  );
};

const ControlStyles = styled.div`
position: fixed;
z-index: 10;
top: 50%;
left: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transform: translateY(-50%);

.control{
padding: 1rem;
cursor: pointer;
background-color: var(--color-grey4);
width: 55px;
height: 55px;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
margin: .7rem 0;
box-shadow: var(--box-shadow1)
}

.active-btn{
    background-color: var(--color-secondary) !important;
    transition: all .4s ease-in-out;
    i{
        color: var(--color-white);
    }
}

i{
    font-size: 1.2rem;
    color: var(--color-grey2);
    pointer-events: none;
}
`;

export default Controls;
