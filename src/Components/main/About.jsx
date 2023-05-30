import React from 'react'

import pic2 from "../../Assets/309594434_436418771929154_2858176374111510243_n.jpg"
import "./about.css"
function About() {
    return (
        <div id='About' className="About">
            <div data-aos="fade-up"
                 data-aos-anchor-placement="center-center" 
                 className="about-div">
                <img id="pic2" src={pic2} alt="" />
            </div>
            <div data-aos="fade-down"
                 data-aos-duration="4000" className="about-div">
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
