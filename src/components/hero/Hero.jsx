import React from 'react'
import "./Hero.css"
import video from "../../assets/videoBg.mp4"

function Hero() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted playsInline />
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Creative Travel</h1>
                <h3>
                    A Philippines based travel agency specializing in global, creative and bespoke trips.
                </h3>
            </div>
        </div>
    )
}

export default Hero