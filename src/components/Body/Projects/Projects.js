import React, { useState, useEffect } from "react";
import { projectData } from "../../../lib/ProjectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(2);
  const [moment, setMoment] = useState("");

  const moveRight = (e) => {
    setMoment("right");
    if (currentIndex === 0) {
      setCurrentIndex(projectData.length - 1);
      setPrevious(projectData.length - 2);
      setNext(0);
    } else {
      setCurrentIndex((prev) => prev - 1);
      setPrevious((prev) => prev - 1);
      setNext((prev) => prev + 1);
    }
  };

  const moveLeft = (e) => {
    setMoment("left");
    if (currentIndex === projectData.length - 1) {
      setCurrentIndex(0);
      setPrevious(projectData.length - 1);
      setNext(1);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setPrevious((prev) => currentIndex-1);
      setNext((prev) => currentIndex+1);
    }
  };
  useEffect(() => {
    if (currentIndex === projectData.length - 1) {
      setNext(0);
    }
    if (currentIndex === 0) {
      setPrevious(projectData.length - 1);
      setNext(1);
    }
    if (currentIndex === 1) {
      setPrevious(0);
      setNext(2);
    }
    if(previous===next){
      setPrevious(currentIndex-2)
    }
    if (next >= projectData.length) {
      setNext(0);
    }
    if (previous >= projectData.length) {
      setPrevious(0);
    }
    if(currentIndex===next){
      setNext(currentIndex+1)
    }
  }, [currentIndex, previous, next]);

console.log(previous, currentIndex, next)
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-div">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`card ${currentIndex === index ? "center" : ""} ${
              previous === index ? "left" : ""
            } ${next === index ? "right" : ""} ${
              moment === "left" ? "from-left" : "from-right"
            } `}
          >
            <ProjectCard
              img={project.img}
              name={project.project}
              url={project.url}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
      <div className="controls">
        <FaArrowLeft onClick={moveRight} />
        <FaArrowRight onClick={moveLeft} />
      </div>
    </div>
  );
};

export default Projects;
