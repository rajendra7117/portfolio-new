import React, {useState} from "react";
import "./Header.css";
import sun from "../../images/sun.png";

import {BsFillBrightnessHighFill, BsFillMoonFill} from 'react-icons/bs'
import {CgArrowLongUpC} from 'react-icons/cg'
import { useSelector, useDispatch} from "react-redux";
import { themeSliceActions } from "../../store/ThemeSlice";

const Header = () => {
  const selectedTheme = useSelector((state) => state.theme.theme)
  const [theme, setTheme] = useState(selectedTheme)


  const dispatch = useDispatch()
  console.log(selectedTheme)

 const setDarkTheme = e => {
   setTheme('dark-theme')
   dispatch(themeSliceActions.setTheme('dark'))
 }

 const setLightTheme = e => {
   setTheme('light-theme')
   dispatch(themeSliceActions.setTheme('light'))
 }
  return (
    <div className={`top ${selectedTheme==='dark' ? 'darkTheme' : ''}`}>
      <div>
        <div className="theme-img">
         {selectedTheme==='dark' ? (<BsFillMoonFill className="moon-star"/>) : ( <img src={sun} />)}


        </div>
        <h1>Hi, i'm Rajendra</h1>
        <h2>React js Developer</h2>
        <a href="Resume.pdf" download="Resume" className="resume">
          Get My Resume
        </a>
      </div>
      <div className="dark-theme-container">
      <span className="light" onClick={setLightTheme}>{<BsFillBrightnessHighFill />}</span>
      <span className={`arrow ${selectedTheme}`}><CgArrowLongUpC /></span>
      <span className="darkIcon" onClick={setDarkTheme}>{<BsFillMoonFill />}</span>
      </div>
    </div>
  );
};

export default Header;
