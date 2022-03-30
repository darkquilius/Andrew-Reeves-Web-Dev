import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Controls from "./components/Controls";
import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import ThemeBtn from "./components/ThemeBtn";
import Timeline from "./components/Timeline";

function sectionSelect(e) {
  let singleSections = document.querySelectorAll(".section");
  let currentBtn = document.querySelectorAll(".active-btn");

  currentBtn[0].classList = currentBtn[0].className.replace("active-btn", "");
  e.target.className += " active-btn";

  singleSections.forEach((section) => {
    section.classList.remove("active");
    if (section.id === e.target.dataset.id) {
      section.classList.add("active");
    }
  });
}

function toggleTheme(){
  document.body.classList.toggle('light-mode');
}


function App() {

  const [timelineToggle, setTimelineToggle] = useState(false)
  return (
    <MainContent className="main-content">
      <div className="bg-shape-wrap">
        <div className="bg-shape1"></div>
        <div className="bg-shape2"></div>
      </div>
      <Header></Header>
      <div>
        <AboutMe />
        <Timeline timelineToggle={timelineToggle} />
        <Portfolio />
        <Contact />
      </div>
      <Controls sectionSelect={sectionSelect} />
      <ThemeBtn toggleTheme={toggleTheme} setTimelineToggle={setTimelineToggle} timelineToggle={timelineToggle} />
    </MainContent>
  );
}

export default App;
