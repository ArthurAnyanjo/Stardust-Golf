import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
                Welcome to Stardust Golf Academy
            </h1>
            <p>Improvements in Golf to last a lifetime</p>
            <button className='btn'>FREE 7 DAY TRIAL <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero