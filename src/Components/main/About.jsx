import React from 'react'
import { Link } from 'react-router-dom'
import pic2 from "../../Assets/309594434_436418771929154_2858176374111510243_n.jpg"
import "./about.css"
function About() {
    return (
        <div className="About">
            <div className="about-div">
                <img id="pic2" src={pic2} alt="" />
            </div>
            <div className="about-div">
                <h1>About Me </h1>
                <p>Hii, This is Mayank singh.
                    I belongs to Allahabad(UP). <br />
                    I have done B.tech in Mechanical Engineering
                    form Dr. APJ ABDUL KALAM TECHNICAL UNIVERSITY in 2020
                    Now i have learned <br /> JAVA Full Stack .</p>
            </div>

        </div>
    )
}

export default About
