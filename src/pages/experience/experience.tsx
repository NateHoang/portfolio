// Experience.tsx
import React from "react";
import "./experience.css";
import ExperienceItem from "../../components/navbar/ExperienceItem";
import ShadowExperienceItem from "../../components/navbar/ShadowExperienceItem";

interface ExperienceData {
  title: string;
  url?: string;
  location: string;
  date: string;
  details: string[];
}

interface ShadowExperienceData {
  title: string;
  url: string;
  date: string;
  details: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      title: "Amazon - L4",
      url: "https://www.amazon.jobs/content/en/job-categories/software-development",
      location: "Amazon, Palo Alto, United States - On-Site",
      date: "Dec. 2024 - July 2025",
      details: ["Software Development Engineer 1 - L4",
        "Frontend Developer on Synthetics, APM, Trineo, Opensearch, RUM, Pulse, and XRAY",
        "Worked with React, JavaScript, TypeScript, HTML, CSS, Java, AWS Services",
        "Helped a project to revamp the user interface of the Synthetics dashboard due to customer feedback",
        "Worked on using opensearch to help with log analysis and monitoring and free to use APIs and charting",
        "Led a project to fix the current user experience with Pulse to allow users to test their bandwidth and API calls"],
    },
    {
      title: "Twinfold Capital",
      url: "https://www.twinfoldcapital.com/",
      location: "Twinfold Capital, LA, United States - Hybrid",
      date: "Aug. 2024 - Sept. 2024",
      details: [
        "Worked as a contractor fullstack developer.",
        "Used MySQL and PHP WordPress to manage databases",
        "Created and documented code for easy updates in both frontend and backend",
        "Separated customer data for AI training",
        "Built a scraper in Python to gather customer data from Hoover and Zoominfo, boosting sales by 8.3%",
      ],
    },
    {
      title: "Nesva Internship",
      url: "https://nesva.net/",
      location: "Nesva - Remote",
      date: "Dec. 2023 - Ongoing",
      details: [
        "Working as a part-time software engineer intern at Nesva, a startup",
        "Worked on the fronted to make sure high resolution dimensions are able to flex into smaller resolution dimensions without re-rendering multiple components",
        "Animated SVG files to enhance customer engagement",
        "Focused on frontend development",
      ],
    },
    {
      title: "Pharmaceutical Clerk",
      url: "https://www.cardinalhealth.com/en.html",
      location: "Cardinal Health, Valencia, United States",
      date: "Aug. 2020 - Aug. 2023",
      details: [
        "Assisted pharmacists with inventory and prescription fulfillment during COVID-19",
        "Collaborated in team efforts for mailing and inventory",
        "Increased mailing production by 9.6% during shifts",
      ],
    },
    {
      title: "Dental Intern",
      url: "http://www.bouquetsmiledental.com/",
      location: "Bouquet Smile Dental, Santa Clarita, United States",
      date: "July 2021 - Apr. 2024",
      details: [
        "Shadowed a general/cosmetic dentist with Dr. Thai for over 250 hours",
        "Learned various dental procedures and assisted with office tasks",
        "Created crowns and bridges using Glidewell",
        "Utilized a furnace to customize crown colors",
      ],
    },
  ];

  const shadowExperiences: ShadowExperienceData[] = [
    {
      title: "Miriam V Van Allen DDS, Los Angeles, United States",
      url: "https://www.lasmilemakers.com/",
      date: "June 2024 - Sept. 2024",
      details: [
        "Shadowed at an orthodontist with Dr. Van Allen for over 100 hours",
        "Learned various orthodontic procedures and assisted with tasks",
        "Would communicate with patients and guide them through the treatment with Invisalign and braces when Dr. Van Allen was busy",
        "Assisted with 3D scanning for Invisalign",
        "Helped with sterilization and cleaning of the office, along with setting up for procedures",
      ],
    },
    {
      title: "Lee Amy DDS, Alameda, United States",
      url: "https://www.amyleedds.com/",
      date: "Mar. 2024 - Apr. 2024",
      details: [
        "Shadowed Dr. Lee, a general dentist",
        "Assisted in lab work for crown creation and coloring",
        "Helped with 3D scanning for crowns and bridges",
      ],
    },
    {
      title: "Ting Paul H DDS, Alameda, United States",
      url: "https://www.paultingdds.com/",
      date: "Mar. 2024 - Apr. 2024",
      details: [
        "Shadowed Dr. Ting, a general dentist",
        "Assisted with creating denture adhesive cream to create dentures for the patient",
        "Helped with suctioning and cleaning the patient's mouth",
      ],
    },
    {
      title: "Parkside Oral Surgery & Implant Center, Alameda, United States",
      url: "https://www.parksideoralsurgery.com/",
      date: "Mar. 2024 - Apr. 2024",
      details: [
        "Shadowed an oral maxillofacial surgeon with Dr. Karwowska",
        "Helped centrifuge blood in order to create a mucous membrane to seal sinus infections",
        "Prepared patients for surgery and assisted in post-op care",
      ],
    },
    {
      title: "Oakland-Alameda Endodontist, Alameda, United States",
      url: "https://www.oaklandalamedaendo.com/",
      date: "Mar. 2024 - Apr. 2024",
      details: [
        "Shadowed Dr. Calvert, an endodontists",
        "Helped with root canals and assisted with lab work",
      ],
    },
  ];

  return (
    <div className="experience-container" id="experience">
      <h1 style={{ marginLeft: "3%", fontSize: "350%" }}>Experience</h1>

      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}

      <div className="experience-block">
        <div className="experience-header">
          <h2 style={{ fontSize: "175%", textDecorationLine: "underline" }}>
            Dental Shadow
          </h2>
        </div>
        {shadowExperiences.map((experience, index) => (
          <ShadowExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
