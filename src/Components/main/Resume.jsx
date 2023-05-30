import React from 'react'
import "./resume.css"
import resumepic from "../../Assets/resume.jpg"
function Resume() {
  return (
    <div id='Resume' className='resume-div'>
      <img data-aos="flip-left" className='resumepic' src={resumepic} alt="" />
      <div>
        <button data-aos="zoom-in-up" >Click To download Resume</button>
      </div>
    </div>
  )
}

export default Resume
