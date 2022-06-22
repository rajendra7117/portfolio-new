import React, { useState } from "react";
import "./Skills.css";
import { useSelector } from "react-redux";
const Skills = () => {
  const [addClass, setAddClass] = useState(false);
  const skills = [
    "React js",
    "React Native",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "BootStrap",
    "Python",
    "Type Script",
    "Node JS",
    "Express",
  ];
  const theme = useSelector((state) => state.theme.theme);

  const toggleClass = (e) => {
    setAddClass((prev) => !prev);
  };
  return (
    <div className="skills">
      <div
        className="skills-container"
        onMouseEnter={toggleClass}
        onMouseLeave={toggleClass}
      >
        <h2> My Skills</h2>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className={`skill skill${index} ${addClass ? 'active' : 'hide'}`}>
          {" "}
          <h5>{skill}</h5>
        </div>
      ))}
    </div>
  );
};

export default Skills;


