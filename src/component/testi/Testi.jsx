import React from 'react'
import './testi.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import lefttArrow from '../../assets/leftArrow.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Testi = () => {
  const transition={ype:'spring' ,duration: 2}
  const [slected,setSelected]=useState(0)
  const tLength =testimonialsData.length
  const handleLeft=()=>{
    slected===0?setSelected(tLength-1)
    :setSelected(prev=>prev- 1)
}
  const handleRight=()=>{
    slected===tLength-1 ? setSelected(0)
    :setSelected(prev=>prev + 1)
}
  return (
    <div className="testi">
      <div className="left">
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>  

        <motion.span
            key={slected}
            initial={{opacity:-1,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:-1,x:100}}
            transition={{...transition,duration:0.8}}
        >{testimonialsData[slected].review}</motion.span>  
        <div className="name">
          <span>{testimonialsData[slected].name}  </span>
          <span>-- {testimonialsData[slected].status}</span>
        </div>
      </div>
      <div className="right">
        <div className="arrows">
          <img onClick={handleLeft} src={lefttArrow} alt="" />
          <img onClick={handleRight} src={rightArrow} alt="" />
        </div>
        <div className="img">
          <motion.div
           initial={{opacity:-1,x:-100}}
           whileInView={{opacity:1,x:0}}
           transition={transition}
          ></motion.div>
          <motion.div
          initial={{opacity:-1,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={transition}
          ></motion.div>
          <motion.img 
          key={slected}
          initial={{opacity:-1,y:-100}}
          whileInView={{opacity:1,y:0}}
          exit={{opacity:-1,y:-100}}
          transition={{...transition,duration:0.8}}
          src={testimonialsData[slected].image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testi