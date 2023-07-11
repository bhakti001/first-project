
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>

    <div>About</div>
        <Link to={'/'}>home</Link> <br />
    <Link to={'/contact'}>contact</Link>
    </>
  )
}

export default About;