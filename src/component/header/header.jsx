import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
export const header = () => {
  const handleBars = ()=>{
document.querySelector('.my-list').classList.toggle('ul-class')
  }
  const handlelist =()=>{
    document.querySelector('.my-list').classList.remove('ul-class')

  }
  return (
    <div className="header">
        <img src={Logo} />
        <img onClick={handleBars} src={bars} alt="" className="bars" />
        <ul className='my-list'>
            <li><Link onClick={handlelist} to='hero' spy={true} smooth={true}>Home</Link></li>
            <li><Link onClick={handlelist} to='joi' span={true} smooth={true}>join now</Link></li>
            <li><Link onClick={handlelist} to='programs' spy={true} smooth={true}>Programs</Link></li>
            <li><Link onClick={handlelist} to='why' spy={true} smooth={true}> Why Us </Link></li>
            <li><Link onClick={handlelist} to='testi' spy={true} smooth={true}>Testimonial</Link></li>
            <li><Link onClick={handlelist} to='plans' spy={true} smooth={true}>Plans</Link></li>
        </ul>
    </div>
  )
}
export default header
