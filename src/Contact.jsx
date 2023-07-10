import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
    <div>Contact</div>
        <Link to={'/about'}>about</Link> <br />
        
    <Link to={'/'}>home</Link>
    </>
  )
}

export default Contact;