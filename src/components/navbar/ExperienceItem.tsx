// ExperienceItem.tsx
import React from "react";

interface ExperienceItemProps {
  title: string;
  url?: string;
  location: string;
  date: string;
  details: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  url,
  location,
  date,
  details,
}) => {
  return (
    <div className="experience-block">
      <div className="experience-header">
        <h2 style={{ fontSize: "175%", textDecorationLine: "underline" }}>
          {url ? <a href={url}>{title}</a> : title}
        </h2>
        <span className="experience-date">{date}</span>
      </div>
      <h3>{location}</h3>
      <ul style={{ fontSize: "110%" }}>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
