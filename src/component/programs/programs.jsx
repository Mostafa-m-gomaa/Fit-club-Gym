import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const programs = () => {
  return (
<div className="programs">
{/* start heding */}
<div className="program-header">
  <span className='stroke-text'>EXPLORE OUR</span><span>PROGRAMS</span><span className='stroke-text'>TO SHAPE YOU</span>
</div>
{/* start program cards */}
<div className="cards">
{programsData.map(program=>(

  <div className="card">
  {program.image}
  <span className='hed'>{program.heading}</span>
  <span>{program.details}</span>
  <div className="join">
    <span>Join Now</span>
    <img src={rightArrow} alt="" />
  </div>
  </div>))}
</div>
</div> 
 )
}

export default programs