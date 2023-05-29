import React from 'react'
import Home from './Home'
import "./main.css"
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'

function Main() {
  return (
    <div className='main'>
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Main
