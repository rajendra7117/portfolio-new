import React, {useState, useEffect} from 'react'
import './Body.css'
import fish from '../../images/fish.png'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import fish2 from '../../images/fish2.png'
import stone from '../../images/stone.png'
import Experience from './Experience/Experience'
import Certificates from './Certifications/Certificates'
import Education from './Education/Education'
import Contacts from './Contact/Contacts'
import { useSelector } from 'react-redux'
const Body = () => {
  const [scrollPostion, setScrollPosition] = useState(0)
  const [animateJelly, setAnimateJelly] = useState(false)
  const [animateCrab, setAnimateCrab] = useState(false)

  const theme = useSelector((state) => state.theme.theme)

   window.addEventListener('scroll', (e) => {
  
    setScrollPosition(window.scrollY)
   })




 useEffect(() => {
  let ed = document.getElementById('education')

   if(ed.offsetTop<=scrollPostion){
     setAnimateJelly(true)
   }
   let contacts = document.getElementById('contacts')
   if(contacts.offsetTop<=scrollPostion){
      setAnimateCrab(true)
   }
 }, [scrollPostion])
  return (
    <div className={`body ${theme==='dark' ? 'dark' : ''}`}>
      
        <div className="container">
        <img src={fish} className="fish1"/>
        <img src={fish} className="fish2"/>
       <Projects />
       
        </div>
        <div className='container2'>
          <img src={fish2} className='fish2-1'/>
          <img src={fish2} className='fish2-2'/>
        <Skills />
        </div>
        <div className='container3'>
        <img src={stone}/>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Experience />
        </div>
        <div className='container4'>
          <Certificates />
        </div>
        <div className='container5' id='education'>
          <Education animateJelly={animateJelly}/>
        </div>
        <div className='container6' id="contacts">
          <Contacts animateCrab={animateCrab}/>
        </div>
      </div>
  )
}

export default Body