import React, { useState, useEffect } from "react";
import { educationalExperience } from "./data";
import "../index.css";

function EducationInfo({ setEducationInfo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    setEducationData(educationalExperience);
  }, []);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationInfo(educationData);
    setIsEditable(false);
  };

  const handleChange = (index, field, value) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][field] = value;
    setEducationData(updatedEducationData);
  };

  return (
    <div>
      <h1>Educational Experience</h1>
      <form onSubmit={handleSubmit}>
        {educationData.map((edu, index) => (
          <div key={edu.Id}>
            <label htmlFor={`college-${index}`}>College:</label>
            <input
              type="text"
              id={`college-${index}`}
              placeholder="College"
              value={edu.College}
              onChange={(e) => handleChange(index, "College", e.target.value)}
              disabled={!isEditable}
            />
            <label htmlFor={`branch-${index}`}>Branch:</label>
            <input
              type="text"
              id={`branch-${index}`}
              placeholder="Branch"
              value={edu.Branch}
              onChange={(e) => handleChange(index, "Branch", e.target.value)}
              disabled={!isEditable}
            />
            <label htmlFor={`year-${index}`}>Year:</label>
            <input
              type="text"
              id={`year-${index}`}
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
              disabled={!isEditable}
            />
          </div>
        ))}
        <button type="button" onClick={handleEdit} disabled={isEditable}>
          Edit
        </button>
        <button type="submit" disabled={!isEditable}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default EducationInfo;
