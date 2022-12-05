import React from 'react'
import './hero.css'
import Header from '../header/header'
import Heart from '../../assets/heart.png'
import Hero from '../../assets/hero_image.png'
import HeroBack from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'


const hero = () => {
  const transition={ype:'spring' ,duration: 2}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-side"> 
        <Header/>
        {/* start the best ad  */}
        <div className="the-best">
            <motion.div
            initial={{left:'238px'}}
            whileInView={{left:'8px'}}
            transition={transition}
            ></motion.div>
            <span>the best fitness clup in the world </span>
        </div>
        {/* end the best ad  */}
        {/* hero text  */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body </span>
          </div>
          <div className="hero-par">
          In here we will help you to shape and build your ideal body and live up your life to fullest          </div>
        </div>
        {/* end of hero text */}
        {/* start figures */}
        <div className="figures">
          <div>
            <span className='num'> 
            <NumberCounter end={145} start={10} delay='5' preFix='+' /> 
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span className='num'>
            <NumberCounter end={978} start={100} delay='3' preFix='+' />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span className='num'>

            <NumberCounter end={50} start={0} delay='5' preFix='+' />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* end figures */}
        {/* start buttons */}
        <div className="buttons">
          <div className="one">GET STARTED</div>
          <div className="two">LEARN MORE</div>
        </div>
        {/* end buttons */}
         </div>
        <div className="right-side"> 
        {/* start join button */}
        <button>Join Now</button>
        {/* start heart rate  */}
        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart">
        <img src={Heart} alt="" />
        <div>Heart Rate</div>
        <div className='num'>116 pbm</div>
        </motion.div>
        {/* hero images */}
        <img className='hero' src={Hero} alt="" />
        <motion.img
          initial={{x:250}}
          whileInView={{x:0}}
          transition={transition}  
        className='hero-back' src={HeroBack} alt="" />

        {/* start calarios */}
        <motion.div
          initial={{x:-200}}
          whileInView={{x:0}}
          transition={transition} 
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span className='num'>220 kcal</span>
          </div>
        </motion.div>
        </div>
    </div>
  )
}

export default hero