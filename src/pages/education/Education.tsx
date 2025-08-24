import "./Education.css";

const relevantCourseWorks = [
  "IoT Devices",
  "Machine Learning",
  "Virtual Reality and Augmented Reality",
  "Mobile App Development",
  "Web Development",
  "Network",
  "Operating System",
  "Object Oriented Programming",
  "Algorithms and Data Structures",
  "Automata and Formal Languages",
  "Human Computer Interaction (HCI)",
  "OCAML Programming Language",
  "IoT Software Systems",
];

function Education() {
  return (
    <div className="education-container" id="education">
      <h1 style={{ marginLeft: "3%", fontSize: "350%" }}>Education</h1>
      <div className="education-block">
        <div className="education-header">
          <h2 style={{ fontSize: "175%", textDecorationLine: "underline" }}>
            College of the Canyons
          </h2>
          <span className="education-date">June 2018 - June 2022</span>
        </div>
        <h3 style={{ fontSize: "150%" }}>Associates for Transfer</h3>
        <p style={{ fontSize: "110%" }}>Computer Science</p>
        <p style={{ fontSize: "110%" }}>GPA: 3.96</p>
        <p style={{ fontSize: "110%" }}>COC Honors</p>
      </div>

      <div className="education-block">
        <div className="education-header">
          <h2 style={{ fontSize: "175%", textDecorationLine: "underline" }}>
            University of California, Santa Barbara
          </h2>
          <span className="education-date">Sept. 2022 - June 2024</span>
        </div>
        <h3>Bachelor of Letters and Science</h3>
        <p>Computer Science</p>
        <p>GPA: 3.76</p>
        <p>Dean's Honors</p>
        <p style={{ fontSize: "110%", maxWidth: "70%" }}>
          Relevant Coursework:{" "}
          {relevantCourseWorks.map((course, index) => (
            <span key={course} style={{ margin: "0 5px" }}>
              {course}
              {index < relevantCourseWorks.length - 1 ? "," : ""}
            </span>
          ))}
        </p>
      </div>

            <div className="education-block">
        <div className="education-header">
          <h2 style={{ fontSize: "175%", textDecorationLine: "underline" }}>
            California NorthState University - College of Dental Medicine
          </h2>
          <span className="education-date">June. 2025 - June 2029</span>
        </div>
        <h3>DDS - Doctor of Dental Surgery</h3>
      </div>
    </div>
  );
}

export default Education;
