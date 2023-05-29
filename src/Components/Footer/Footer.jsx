import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='Footer'>
            <div>
                <h3>made by : ©Mayank  <i class='bx bxs-heart' ></i> </h3>
            </div>

            <div className='profile-links'>
                <li><Link to=""><i className='bx bxl-linkedin-square'></i></Link></li>
                <li><Link to="/https://github.com/mayank0406"><i className='bx bxl-github'></i></Link></li>
                <li><Link to="/"><i className='bx bxl-instagram-alt'></i></Link></li>
            </div>
        </div>
    )
}

export default Footer
