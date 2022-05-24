import React, { useState } from "react";
import "./Education.css";
import EducationType from "./EducationType";
import boy from "../../../images/boy.png";
import student from "../../../images/student.png";
import gradImg from "../../../images/computer.png";
import jellyImg from "../../../images/jellyfish.png";

const Education = ({animateJelly}) => {
  const [education, setEducation] = useState("school");
  const [prev, setPrev] = useState("");

  const toggleEducation = (ind) => {
    setPrev(education);
    setEducation(ind);
    let ele = document.getElementById(`${ind}`).offsetTop;
    document.getElementById("scrollDiv").scrollTop = ele;
  };

  

  return (
    <div className="education-container">
      <h1>My Education</h1>
      <div className="education-box">
        <div className="scroll-div">
          <span
            className={`${education === "school" ? "active" : ""}`}
            onClick={toggleEducation.bind(this, "school")}
          >
            School
          </span>
          <span
            className={`${education === "inter" ? "active" : ""}`}
            onClick={toggleEducation.bind(this, "inter")}
          >
            Intermediate
          </span>
          <span
            className={`${education === "grad" ? "active" : ""}`}
            onClick={toggleEducation.bind(this, "grad")}
          >
            Graduation
          </span>
          <span className={`slider ${prev}-${education}`}></span>
        </div>
        <div className="education-scroll" id="scrollDiv">
          <EducationType
            id="school"
            ed="School"
            time="2013-2014"
            institue="DNR EM high school"
            icon={boy}
          />
          <EducationType
            id="inter"
            ed="Intermediate"
            time="2014-2016"
            institue="Sri Chaitanya JR College"
            icon={student}
          />
          <EducationType
            id="grad"
            ed="Graduation"
            time="2016-2020"
            institue="Vishnu Institute of Technology"
            icon={gradImg}
          />
        </div>
      </div>
      <img src={jellyImg} className={`jellyFish ${animateJelly ? 'active' : ''}`}/>
    </div>
  );
};

export default Education;
