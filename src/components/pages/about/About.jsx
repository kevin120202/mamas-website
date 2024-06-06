import React from 'react'
import "./About.css"
import img from "../../../assets/img1-bangkok.jpg"
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'


function About() {
    return (
        <div className='about'>
            <div className="container">
                <img src={img} alt="" className='profile-img' />
                <div className="about-description">
                    <h3>Meet Yeye</h3>
                    <p>I started this travel agency to support my full service destination wedding company, Lindeman Weddings and Events, because destination weddings are so much more than just planning a wedding.</p>
                    <p>I grew up on the beaches of California and coasts of Scotland. I have lived almost half my life in Europe, but do still call Seattle, WA, USA home for the winter months. This is where our offices are headquartered. In the summers you can find me bouncing between the Amalfi Coast and the Greek Islands. I love to travel and explore new places in an active and meaningful way. I work with many colleagues around the world to offer our guests the best local experiences. Bringing good tourism to these amazing communities is my passion.</p>
                    <p>Beyond planning for destination weddings, we also have options for solo travelers, couples as well as groups and family reunions.</p>
                    <p>Planning a wellness or photography retreat? We can also help by being the travel planning support as well as manage your event registrations.</p>
                    <p>Thanks for stopping by — I hope we can help plan your next unforgettable getaway!
                        -Erin Lindeman</p>
                </div>
            </div>
        </div>
    )
}

export default About