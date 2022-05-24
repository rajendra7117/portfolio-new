import React, {useState} from 'react'
import './Contact.css'
import { motion } from 'framer-motion'

const Contact = ({contact, type, icon}) => {
    const [rotate, setRotate] = useState(false)
    const toggleRotate = e => {
        setRotate(prev => !prev)
    }
    let content;
    if(type==='phone' || type==='email'){
      content = <div className='contact-info'>{icon} <h5>{contact}</h5></div>
    }
   
    else{
      content = <div className='contact-info'>{icon} <a href={contact} target="_blank">View Profile</a></div>
    }
  return (
    <motion.div className='contact'
    onMouseEnter={toggleRotate}
    onMouseLeave={toggleRotate}
    >
        <motion.div className='rotator'
        animate={{rotate: rotate ? 90 : 0, width: rotate ? 250 : '12rem', height: rotate ? 250 : '90%'}}
        >
   
        </motion.div>
        <motion.div className='rotator'
        animate={{rotate: rotate ? -90 : 0, width: rotate ? 250 : '12rem', height: rotate ? 250 : '90%'}}
        >
   
        </motion.div>
      
        {content}
      
    </motion.div>
  )
}

export default Contact