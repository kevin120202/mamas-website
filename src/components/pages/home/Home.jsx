import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Hero from '../../hero/Hero'
import Destinations from '../../destinations/Destinations'

function Home() {
    return (
        <div>
            <Hero />
            <Destinations />
        </div>
    )
}

export default Home