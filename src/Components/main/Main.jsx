import React from 'react'
import Home from './Home'
import "./main.css"
import About from './About'
import Resume from './Resume'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'


function Main() {
  return (
    <div className='main'>
     
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      
      {/* <Project/> */}
      
    </div>
  )
}

export default Main
