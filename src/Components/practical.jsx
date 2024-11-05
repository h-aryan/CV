import React, { useState } from "react";
import "../index.css";

function PracticalExperience({ setPracticalInfo, initialExperience }) {
  const [experienceData, setExperienceData] = useState(initialExperience);

  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPracticalInfo(experienceData);
    setIsEditable(false);
  };

  const handleChange = (index, field, value) => {
    const updatedExperienceData = [...experienceData];
    updatedExperienceData[index][field] = value;
    setExperienceData(updatedExperienceData);
  };

  const handleAddExperience = () => {
    const newExperience = {
      key: Date.now(),
      companyName: "",
      positionTitle: "",
      date: "",
    };
    setExperienceData([...experienceData, newExperience]);
  };

  return (
    <div>
      <h1>Practical Experience</h1>
      <form onSubmit={handleSubmit}>
        {experienceData.map((exp, index) => (
          <div key={exp.key} className="experience-card">
            <h3>Experience {index + 1}</h3>
            <label htmlFor={`company-${index}`}>Company Name:</label>
            <input
              type="text"
              id={`company-${index}`}
              placeholder="Company Name"
              value={exp.companyName}
              onChange={(e) =>
                handleChange(index, "companyName", e.target.value)
              }
              disabled={!isEditable}
            />
            <label htmlFor={`position-${index}`}>Position Title:</label>
            <input
              type="text"
              id={`position-${index}`}
              placeholder="Position Title"
              value={exp.positionTitle}
              onChange={(e) =>
                handleChange(index, "positionTitle", e.target.value)
              }
              disabled={!isEditable}
            />
            <label htmlFor={`date-${index}`}>Date:</label>
            <input
              type="text"
              id={`date-${index}`}
              placeholder="Date"
              value={exp.date}
              onChange={(e) => handleChange(index, "date", e.target.value)}
              disabled={!isEditable}
            />
          </div>
        ))}
        <button type="button" onClick={handleEdit} disabled={isEditable}>
          Edit
        </button>
        <button className="submit" type="submit" disabled={!isEditable}>
          Submit
        </button>
        <button
          type="button"
          onClick={handleAddExperience}
          disabled={!isEditable}
        >
          + Add Experience
        </button>
      </form>
    </div>
  );
}

export default PracticalExperience;
