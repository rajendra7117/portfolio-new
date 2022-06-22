import React, { useState, useEffect } from "react";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const ProjectCard = ({ name, url, desc, img }) => {
  const [showDetails, setShowDetails] = useState(false);
  const screenSize = window.screen.width;
  const [size, setSize] = useState(screenSize)
  const theme = useSelector((state) => state.theme.theme)

  const toggleDetails = (e) => {
    setShowDetails((prev) => !prev);
  };

  useEffect(() => {
    setSize(screenSize)
  }, [screenSize])
  return (
    <div
      className="project-card"
      onMouseEnter={toggleDetails}
      onMouseLeave={toggleDetails}
    >
      <div className="image">
        <img src={img} alt="Project-snap"/>
      </div>
      {size > 560 ? (
        <>
          <motion.div
            className={`details ${theme==='dark' ? 'dark' : ''}`}
            initial={{
              height: size > 560 ? 0 : "8rem",
              opacity: size > 560 ? 0 : 1,
            }}
            animate={{
              height: showDetails ? "8rem" : 0,
              opacity: showDetails ? 1 : 0,
            }}
          >
            <h5>{name}</h5>
            <a href={url} target="_blank">
              
              Live Site
            </a>
            <p>{desc}</p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div className={`details`}
          style={{height: '8rem', opacity: 1}}
          >
            <h5>{name}</h5>
            <a href={url} target="_blank">
            
              Live Site
            </a>
            <p>{desc}</p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
