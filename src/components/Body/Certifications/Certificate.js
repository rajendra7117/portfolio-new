import React from 'react'
import { motion } from 'framer-motion'
const Certificate = ({img}) => {
  return (
    <motion.div className='certificate'
    whileHover={{scale: 1.2, transition: {stiffness: 100, duration: 0.5}}}
    >
        <img src={img}/>
    </motion.div>
  )
}

export default Certificate