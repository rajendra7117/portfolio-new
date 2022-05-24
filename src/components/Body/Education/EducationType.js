import React from 'react'
import './EducationType.css'

const EducationType = ({id, ed, time, institue, icon}) => {
  return (
    <div className='ed' id={id}>
        <div className='ed-details'>
            <h1>{ed}</h1>
            <h3>{institue}</h3>
            <h4>{time}</h4>
        </div>
        <div className='ed-icon'>
            <img src={icon}/>
        </div>
    </div>
  )
}

export default EducationType