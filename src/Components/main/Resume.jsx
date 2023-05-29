import React from 'react'
import "./resume.css"
import resumepic from "../../Assets/resume.jpg"
function Resume() {
  return (
    <div className='resume-div'>
      <img className='resumepic' src={resumepic} alt="" />
      <div>
        <button>Click To download Resume</button>
      </div>
    </div>
  )
}

export default Resume
