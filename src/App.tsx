import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/navbar";
import Intro from "./pages/intro/intro";
import About from "./pages/about/about";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/experience";
import Interest from "./pages/Interest/interest";
import Projects from "./pages/projects/project";
import MobileNavBar from "../src/components/navbar/mobileNavBar";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="navbar-mobile">
        <MobileNavBar />
      </div>
      <div className="content-container">
        <Intro data-aos="fade-up" />
        <About data-aos="fade-up" />
        <Education data-aos="fade-up" />
        <Experience data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Interest data-aos="fade-up" />
      </div>
    </div>
  );
}

export default App;
