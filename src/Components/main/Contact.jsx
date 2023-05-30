import React from 'react'
import "./contact.css";

function Contact() {
    return (
        <div id='Contact' className='contact-div'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" id='header'>Contact Me</h1>
            <div className='Inner-div' >
                <div data-aos="zoom-out-right" >
                    <p>
                   <p data-aos="zoom-out">MAYANK SINGH</p><br />
                    Prayagraj, Uttar Pradesh-212107 <br />
                    Mobno : 7054767298 <br />
                    Email : mayanksingh8882@gmail.com 
                    </p>
                </div>
                <div data-aos="zoom-out-down" className='from-div'>
                    <form action="">
                        <input type="text" placeholder='Name' required />
                        <input type="email" placeholder='Email' required />
                        <textarea cols="40" rows="8" placeholder='Describe Yourself...'></textarea>
                    </form>
                    <button data-aos="zoom-in-up">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
