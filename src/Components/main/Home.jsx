import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import pic1 from "../../Assets/IMG_20190811_230546_195.jpg"

function Home() {
  return (
       <div className="home">
            <div className="indiv">
                <p>Full Stack Developer.</p>
                <h1 >Hi, I'm <span id="name">Mayank</span> Singh <br /> From Prayagraj.(India) </h1>
                
                <div className='my-links'>
                <li><Link to=""><i className='bx bxl-linkedin-square'></i></Link></li>
                <li><Link to="/https://github.com/mayank0406"><i className='bx bxl-github'></i></Link></li>
                <li><Link to="/"><i className='bx bxl-instagram-alt'></i></Link></li>
                </div>
            </div>
            <div className="indiv">
                <img id="img1" src={pic1} alt=""/>
            </div>
        </div>
  )
}

export default Home
