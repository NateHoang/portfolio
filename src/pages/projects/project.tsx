import React, { useState } from "react";
import "./project.css";
import coursesPic from "../../assets/courses.png";
import ddosPic from "../../assets/ddos.jpg"; // Assuming you have this asset
import fridgePic from "../../assets/fridge.png"; // Assuming you have this asset
import summitPic from "../../assets/vr.png"; // Assuming you have this asset
import smartDrapesPic from "../../assets/smartDrape.png"; // Assuming you have this asset
import moonDustPic from "../../assets/moonDust.jpg";
import marketMatePic from "../../assets/marketMatePic.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface Project {
  title: string;
  description: string;
  image: string;
  language: string;
}

type ProjectInfo = {
  [key: string]: Project;
};

const projectsInfo: ProjectInfo = {
  UCSBCourses: {
    title: "UCSB Courses",
    description:
      "Made using React, this project is to help UCSB students in the college of engineering to find courses that they are interested in. Keeps track of classes taken previously, the average GPA of the class, your overall, quarterly, and yearly GPA.",
    image: coursesPic,
    language: "React.js, MongoDB, Render, HTML/CSS, Bootstrap",
  },
  FridgeMaster: {
    title: "Fridge Master",
    description:
      "Made with Flutter, this project is to help individuals keep track of items in their fridge and recommend recipes based on the items they have.",
    image: fridgePic,
    language: "Flutter, Dart, Firebase, HTML/CSS",
  },
  Summit: {
    title: "Summit",
    description:
      "A VR simulation using C# and Unity to create a VR experience of climbing up a mountain. Creating various scripts, we were able to create a VR experience that allows the user to climb up a mountain and experience the view from the top.",
    image: summitPic,
    language: "C#, Unity",
  },
  DDoSDetector: {
    title: "DDoS Detector",
    description:
      "A network tool for detecting DDoS attacks to help make UCSB's network more secure. With the usage of netUnicorn and Trustee, we were able to detect DDoS attacks and mitigate them with an accuracy of 90 - 99%",
    image: ddosPic,
    language: "Python, netUnicorn, Trustee, Docker",
  },
  SmartDrapes: {
    title: "Smart Drapes",
    description:
      "Using Arduino IDE, we created a smart drape IoT device that can be controlled via SinRic Pro and Amazon Alexa. This device can be used to open and close drapes and only cost $50 to make. We used C# in order to program the ESP32 microcontroller to open and close the drapes.",
    image: smartDrapesPic,
    language: "C#, Arduino IDE, SinRic Pro, Docker",
  },
  MoonDust: {
    title: "Moon Dust",
    description:
      "A stock trading scraper that scrapes data from stockanalysis.com for fundamental analysis. This also has bots that trades stocks for you that you can set up. Contains other bots to help advertise the product.",
    image: moonDustPic,
    language: "Python, Selenium, Flask, React.js",
  },
  MarketMate: {
    title: "Market Mate",
    description:
      "Used figma to create a phone app to help users in Goleta, Santa Barbara find the best deals in the area.",
    image: marketMatePic,
    language: "Figma",
  },
};

const githubUrls: { [key: string]: string } = {
  UCSBCourses:
    "https://github.com/ucsb-cs148-w23/project-t02-fouryearscheduleplanner",
  FridgeMaster: "https://github.com/ucsb-cs184-f23/pj-flutter-03",
  Summit: "https://github.com/NateHoang/cs190i-Project",
  DDoSDetector: "https://github.com/NateHoang/CS190N-Proj",
  SmartDrapes: "https://github.com/ucsb/CS190B-F23-smartDrapes-madison_long1",
  MoonDust: "https://github.com/calee14/moon-dust",
  MarketMate:
    "https://www.figma.com/design/yQweRnjKTxwudGMMt1KhT1/JANKR?node-id=0-1&node-type=canvas&t=tNBzicwS9snJAQmR-0",
};

function Projects() {
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const handleProjectInteraction = (
    projectKey: string,
    event:
      | React.MouseEvent<HTMLAnchorElement | HTMLImageElement, MouseEvent>
      | React.TouchEvent<HTMLImageElement>
  ) => {
    event.preventDefault(); // Prevent the default behavior
    event.stopPropagation(); // Stop the event from bubbling up
    setOpenPopup(projectKey); // Open the popup
  };

  const renderPopupContent = (projectKey: string) => {
    const project = projectsInfo[projectKey];
    if (!project) return null;

    return (
      <div className="popup-item">
        <div className="popup-header">
          <a
            href={githubUrls[projectKey]}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-title"
          >
            {project.title}
          </a>
          <button
            className="popup-close-btn"
            onClick={() => setOpenPopup(null)}
          >
            &times;
          </button>
        </div>
        <img src={project.image} alt={project.title} className="popup-image" />
        <p>
          <b>Tools:</b> {project.language}
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
      </div>
    );
  };

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="project-content">
        {Object.keys(projectsInfo).map((projectKey) => (
          <div className="project-block" key={projectKey}>
            <a
              href={githubUrls[projectKey]}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
              onClick={(e) => handleProjectInteraction(projectKey, e)}
            >
              <h3>{projectsInfo[projectKey].title}</h3>
            </a>
            <img
              src={projectsInfo[projectKey].image}
              alt={projectsInfo[projectKey].title}
              className="project-image"
              onClick={(e) => handleProjectInteraction(projectKey, e)} // Handle click events
              onTouchEnd={(e) => handleProjectInteraction(projectKey, e)} // Handle touch events
            />
          </div>
        ))}
      </div>

      {openPopup && (
        <Popup
          open={!!openPopup}
          closeOnDocumentClick
          onClose={() => setOpenPopup(null)}
        >
          {renderPopupContent(openPopup)}
        </Popup>
      )}
    </div>
  );
}

export default Projects;
