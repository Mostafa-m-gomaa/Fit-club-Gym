import React from 'react'
import './plans.css'
import { plansData } from '../../data/plansData'
import white from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans">
        <div className="blur plans-blur-1">sayeed</div>
        <div className="blur plans-blur-2"></div>
        <div className="plans-header">
            <span className='stroke-text'>READY TO START </span>
            <span>YOUR JOURNEY </span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        <div className="cards">
        {plansData.map((data,i)=>(
            <div className="card" key={i}>
                {data.icon}
                <span>{data.name}</span>
                <span>$ {data.price}</span>
                <div className="features">
                    {data.features.map((feat,i)=>(
                        <div className="featur">
                            <img src={white} />
                            <span key={i}>{feat}</span>
                        </div>
                    ))}
                </div>
                <span>See more benefits -{'>'} </span>
                <button>join Now</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans