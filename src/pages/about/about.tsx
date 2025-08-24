import { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import "../../App.css";
import "./about.css";

const list1 = [
  "Java",
  "JavaScript",
  "Python",
  "Flutter",
  "FireBase",
  "MongoDB",
  "JavaScript",
  "SCRUM",
  "MySQL",
];

const list2 = [
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Git/Github",
  "AWS",
  "Agile",
  "PHP",
  "Wordpress",
];

const list3 = [
  "GitHub",
  "Linux",
  "C++",
  "C#",
  "C",
  "IoT Devices",
  "Frontend",
  "Backend",
  "AWS",
];

function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="about-container" id="about">
      <h1 className="about-header">About</h1>
      <div className="about-content" style={{ fontSize: "125%" }}>
        Hi, my name is Nathan Hoang. I am a University of California - Santa
        Barbara (UCSB) computer science major Alumni. I transferred into UCSB
        from College of the Canyons in 2022 and graduated from UCSB in the
        spring of 2024. Areas of interest for me are software engineering, web
        development, app development, network engineering, security, and
        fullstack development. I have worked in Amazon Web Service as a Software 
        Developer Engineer I - L4 for about 7 months. As a frontend developer on Synthetics, 
        APM, Trineo, opensearch, RUM, Pulse, and XRAY I was on road for promotion for L5, 
        but left coding and am now persuing in becoming a dentists at CNSU. I am 
        currently a D1 and plan to graduate in 2029.
      </div>
      <h3 className="about-header2">Skills</h3>
      <div className="about-content">
        <ul className="about-block" style={{ fontSize: "125%" }}>
          {list1.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="about-block" style={{ fontSize: "125%" }}>
          {list2.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="about-block" style={{ fontSize: "125%" }}>
          {list3.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
