import React from 'react'
import Home from './Home'
import "./main.css"
import About from './About'
import Resume from './Resume'
import Skills from './Skills'

function Main() {
  return (
    <div className='main'>
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
    </div>
  )
}

export default Main
