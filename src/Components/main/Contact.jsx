import React from 'react'
import "./contact.css";

function Contact() {
    return (
        <div className='contact-div'>
            <h1 id='header'>Contact Me</h1>
            <div className='Inner-div' >
                <div>
                    <p>
                    MAYANK SINGH <br />
                    Prayagraj, Uttar Pradesh-212107 <br />
                    Mobno : 7054767298 <br />
                    Email : mayanksingh8882@gmail.com 
                    </p>
                </div>
                <div className='from-div'>
                    <form action="">
                        <input type="text" placeholder='Name' required />
                        <input type="email" placeholder='Email' required />
                        <textarea cols="40" rows="8" placeholder='Describe Yourself...'></textarea>
                    </form>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
