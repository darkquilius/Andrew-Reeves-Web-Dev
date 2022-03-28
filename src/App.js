import AboutMe from "./components/AboutMe";
import Controls from "./components/Controls";
import Header from "./components/Header";
import { MainContent } from "./components/MainContent";
import Portfolio from "./components/Portfolio";
import { Section } from "./components/Section";
import { SectionContainer } from "./components/SectionContainer";
import Timeline from "./components/Timeline";

function sectionSelect(e) {
  let allSections = document.querySelectorAll(".main-content");
  let singleSections = document.querySelectorAll(".section");
  let allControls = document.querySelectorAll(".controls");
  let singleControl = document.querySelectorAll(".control");
  let currentBtn = document.querySelectorAll(".active-btn");
  let currentSection = document.querySelectorAll(".active");

  currentBtn[0].classList = currentBtn[0].className.replace("active-btn", "");
  e.target.className += " active-btn";

  singleSections.forEach((section) => {
    section.classList.remove("active");
    if (section.id == e.target.dataset.id) {
      section.classList.add("active");
    }
  });
}

function App() {
  return (
    <MainContent className="main-content">
      <div className="bg-shape-wrap">
        <div className="bg-shape1"></div>
        <div className="bg-shape2"></div>
      </div>
      <Header></Header>
      <SectionContainer>
        <AboutMe />
        <Timeline />
        <Portfolio />
        <Section className="section sec5 contact" id="contact"></Section>
      </SectionContainer>
      <Controls sectionSelect={sectionSelect} />
    </MainContent>
  );
}

export default App;
