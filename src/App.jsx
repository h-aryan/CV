import "./App.css";
import { useState } from "react";
import "./index.css";
import GeneralInfo from "./Components/general-info";
import EducationInfo from "./Components/education";
import PracticalExperience from "./Components/practical";
import Display from "./Components/display";
import {
  generalInfoData,
  educationalExperience,
  practicalExperience,
} from "./Components/data";

function App() {
  const [isCvShow, setIsCvShow] = useState(false);

  // State to hold data
  const [generalInfo, setGeneralInfo] = useState(generalInfoData);
  const [educationInfo, setEducationInfo] = useState(educationalExperience);
  const [practicalInfo, setPracticalInfo] = useState(practicalExperience);

  const handleShowCv = () => {
    setIsCvShow(!isCvShow);
  };

  return (
    <>
      <header>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>CV Application</h1>
          <button className="header-button" onClick={handleShowCv}>
            {isCvShow ? "CV Form" : "Display CV"}
          </button>
        </div>
      </header>
      {isCvShow ? (
        <Display
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
        />
      ) : (
        <>
          <GeneralInfo
            setGeneralInfo={setGeneralInfo}
            generalInfo={generalInfo}
          />
          <EducationInfo setEducationInfo={setEducationInfo} />
          <PracticalExperience
            setPracticalInfo={setPracticalInfo}
            initialExperience={practicalInfo}
          />
        </>
      )}
    </>
  );
}

export default App;
