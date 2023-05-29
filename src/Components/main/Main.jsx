import React from 'react'
import Home from './Home'
import "./main.css"
import About from './About'
import Resume from './Resume'

function Main() {
  return (
    <div className='main'>
      <Home/>
      <About/>
      <Resume/>
    </div>
  )
}

export default Main
