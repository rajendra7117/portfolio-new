import React, { useState, useEffect } from "react";
import "./Certificates.css";


import { motion } from "framer-motion";
import { certificates } from "../../../lib/CertificatesData";
import Certificate from "./Certificate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Certificates = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [movement, setMoveMent] = useState('')
  const [count, setCount] = useState(0)
  const [showLeft, setShowLeft] = useState(true)
  const [showRight, setShowRight] = useState(false)
  const screenSize = window.screen.width

 
  const toggleButtons = (e) => {
    
    setShowButtons((prev) => !prev);
  };

  const moveLeft = e => {
   
    setMoveMent('moveLeft')
    setCount(prev => prev+1)
    
    
  }
  const moveRight = e => {
    
    setMoveMent('moveRight')
    
    setCount(prev=> prev-1)
    
  }

 useEffect(() => {
  console.log(count, screenSize)
    if(screenSize>1000){
      if(count>=1){
        setShowRight(true)
        setShowLeft(false)
        
      }
      if(count===0){
        setShowLeft(true)
        setShowRight(false)
      }
      
    }
    if(screenSize<1000 && screenSize>560){
      
      if(count>0){
        setShowLeft(true)
        setShowRight(true)
      }
      if(count===0){
        setShowRight(false)
      }
      if(count===2){
        setShowLeft(false)
      }
    
    }
    if(screenSize<560){
      if(count===certificates.length-1){
        setShowLeft(false)
      }
      if(count>0){
        setShowRight(true)
      }
      if(count===0){
        setShowRight(false)
      }
    }
 }, [screenSize, count])

 

  return (
    <div className="certificates" onMouseEnter={toggleButtons} onMouseLeave={toggleButtons}>
      <h2>Certifications</h2>
      <div className="sliderContainer" >
      <motion.div

        className={`certificatesContainer ${movement}`}
        animate={{translateX: movement==='moveLeft' ? `${count* `${screenSize<1000 ? -98 : -90}`}%` : 0 || movement==='moveRight' ? `${`${screenSize>1000 ? 0 : `${count*-97}`}`}%` : 0}}
       
       
      >
        {certificates.map((cert, index) => (
          <Certificate key={index} img={cert.img} />
        ))}
      </motion.div>
      </div>
      <button className={`left ${(showButtons && showLeft) ? 'active' : ''}`} onClick={moveLeft}>
        {<FaChevronLeft />}
      </button>
      <button className={`right ${(showButtons && showRight) ? 'active' : ''} `} onClick={moveRight}>
        {<FaChevronRight />}
      </button>
    </div>
  );
};

export default Certificates;
