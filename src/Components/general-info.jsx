import React, { useState, useEffect } from "react";

function GeneralInfo({ setGeneralInfo, generalInfo }) {
  const [name, setName] = useState(generalInfo?.Name || "");
  const [mobile, setMobile] = useState(generalInfo?.Mobile || "");
  const [email, setEmail] = useState(generalInfo?.Email || "");
  const [location, setLocation] = useState(generalInfo?.location || "");
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setName(generalInfo?.Name || "");
    setMobile(generalInfo?.Mobile || "");
    setEmail(generalInfo?.Email || "");
    setLocation(generalInfo?.location || "");
  }, [generalInfo]);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo({
      Name: name,
      Mobile: mobile,
      Email: email,
      location: location,
    });
    setIsEditable(false);
  };

  return (
    <div>
      <h1>General Info</h1>
      <form onSubmit={handleSubmit}>
        <legend>
          <h3>Personal Info</h3>
        </legend>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={!isEditable}
            />
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              disabled={!isEditable}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!isEditable}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              disabled={!isEditable}
            />
          </li>
          <li>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default GeneralInfo;
