import React from 'react'
import{ useRef } from 'react';
import './join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        document.querySelector(".sasa").value=" "
    
        emailjs.sendForm('service_dee6w6f', 'template_un6cfg4', form.current, 'KNAMJ6lCYay8QXeyT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <div className="join" id="joi">
        <div className="left">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right">
            <form ref={form} action="" onSubmit={sendEmail}>
                <input className='sasa' type='text' name='from_name' placeholder='Enter your Email Address here...' />
                <button>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join