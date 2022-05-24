import React from 'react'
import './Contacts.css'
import Contact from './Contact'
import { contacts } from '../../../lib/ContactData'
import crabImg from '../../../images/crab.png'
const Contacts = ({animateCrab}) => {
 
  return (
    <div className='contacts'>
        <h1>Contact ME</h1>
        <div className='contact-types'>
        {contacts.map((item) => <Contact key={item.contact} type={item.contact} contact={item.data} icon={item.icon}/>)}
        </div>
        <img src={crabImg} className={`crabImg ${animateCrab ? 'active' : ''}`}/>
    </div>
  )
}

export default Contacts