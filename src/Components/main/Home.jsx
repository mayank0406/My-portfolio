import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import pic1 from "../../Assets/IMG_20190811_230546_195.jpg"


function Home() {
  return (
       <div id='Home' className="home">
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="indiv">
                <p>Full Stack Developer.</p>
                <h1 >Hi, I'm <span id="name">Mayank</span> Singh <br /> From Prayagraj.(India) </h1>
                
                <div className='my-links'>
                <li><Link  target="_blank" to="https://www.linkedin.com/in/mayank-singh-21208a190/"><i className='bx bxl-linkedin-square'></i></Link></li>
                <li><Link  target="_blank" to="https://github.com/mayank0406"><i className='bx bxl-github'></i></Link></li>
                <li><Link target="_blank" to="https://www.instagram.com/mayankmusiclover/"><i className='bx bxl-instagram-alt'></i></Link></li>
                </div>
            </div>
            <div data-aos="fade-left" className="indiv">
                <img id="img1" src={pic1} alt=""/>
            </div>
        </div>
  )
}

export default Home
