// ShadowExperienceItem.tsx
import React from "react";

interface ShadowExperienceItemProps {
  title: string;
  url: string;
  date: string;
  details: string[];
}

const ShadowExperienceItem: React.FC<ShadowExperienceItemProps> = ({
  title,
  url,
  date,
  details,
}) => {
  return (
    <div>
      <div className="experience-header">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <span className="experience-date">{date}</span>
      </div>
      <ul style={{ fontSize: "110%" }}>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShadowExperienceItem;
