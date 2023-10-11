import React from 'react'
import "./resume.css"
import resumepic from "../../Assets/resume.jpg"
import resume from "../../Assets/mayankresume.jpg"
function Resume() {
  return (
    <div id='Resume' className='resume-div'>
      <img data-aos="flip-left" className='resumepic' src={resumepic} alt="" />
      <div>
        <button data-aos="zoom-in-up" ><a target='blank' download="mayank_resume" href={resume}>Click To download Resume</a></button>
      </div>
    </div>
  )
}

export default Resume
