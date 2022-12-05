import React from 'react'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <hr />
        <div className="social">
            <a href="https://github.com/Mostafa-m-gomaa" target='_blank'><img src={github} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
            <a href="https://www.linkedin.com/in/mostafa-gomaa-4a2660217/" target='_blank'><img src={linkedin} alt="" /></a>
        </div>
        <img className='log' src={logo} alt="" />
        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>
    </div>
  )
}

export default Footer