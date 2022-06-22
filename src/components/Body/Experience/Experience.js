import React, { useState } from "react";
import "./Experience.css";
import workGif from "../../../images/briefcase.gif";
import { useSelector } from "react-redux";
const Experience = () => {
  const [showRipple, setShowRipple] = useState(false);
  const [showRipple1, setShowRipple1] = useState(false);
  const theme = useSelector((state) => state.theme.theme)
  const toggleRipple = (e) => {
    setShowRipple((prev) => !prev);
  };

  const toggleRipple1 = (e) => {
    setShowRipple1((prev) => !prev);
  };

  return (
    <div className={`experience ${theme==='dark' ? 'dark' : ''}`}>
      <div className="exp-container">
        <div className="exp1" onMouseEnter={toggleRipple} onMouseLeave={toggleRipple}>
          <div className="part1">
            <img src={workGif} />
          </div>
          <div className="part2">
            <h4>Associate Technical Engineer</h4>
            <h5>IBM {`(2020-2021)`}</h5>
            <p>Front end development with React</p>
          </div>
          <div className={`ripple ${showRipple ? "active" : ""}`}></div>
        </div>
        <div className="exp2" onMouseEnter={toggleRipple1} onMouseLeave={toggleRipple1}>
          <div className="part1">
            <img src={workGif} />
          </div>
          <div className="part2">
            <h4>System Administrator</h4>
            <h5>Kyndryl {`(2021-2022)`}</h5>
            <p>IAM Primary Controls</p>
          </div>
          <div className={`ripple1 ${showRipple1 ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
