import React from "react";
import "../index.css";

const Display = ({ generalInfo, educationInfo, practicalInfo }) => {
  return (
    <div className="cv-display">
      <section className="general-info">
        <h1>{generalInfo.Name}</h1>
        <p className="personal-location">{generalInfo.location}</p>
        <address className="personal-address">
          <a href={"tel:+" + generalInfo.Mobile}>{generalInfo.Mobile}</a>
          <a href={"mailto:" + generalInfo.Email}>{generalInfo.Email}</a>
        </address>
      </section>

      <section className="educational-experience">
        <h2>Educational Experience</h2>
        <hr />
        {educationInfo.map(({ year, College, Branch, Id }) => (
          <article key={Id}>
            <div>
              <b>{year}</b> - <b>{Branch}</b> at <b>{College}</b>
            </div>
          </article>
        ))}
      </section>

      <section className="practical-experience">
        <h2>Practical Experience</h2>
        <hr />
        {practicalInfo.map(({ positionTitle, companyName, date, key }) => (
          <article key={key}>
            <div>
              <b>{date}</b> - <b>{positionTitle}</b> at <b>{companyName}</b>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Display;
