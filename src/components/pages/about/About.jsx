import React from 'react'
import "./About.css"
import yeye_img from "../../../assets/yeye-pic.jpeg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function About() {
    return (
        <motion.div className='about'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <h1 className='about-title'>About</h1>
                <div className='description-container'>
                    <img src={yeye_img} alt="" className='profile-img' />
                    <div className="about-description">
                        <h3>MEET YEYE</h3>
                        <p>I started this travel agency to support my full service destination wedding company, Lindeman Weddings and Events, because destination weddings are so much more than just planning a wedding.</p>
                        <p>I grew up on the beaches of California and coasts of Scotland. I have lived almost half my life in Europe, but do still call Seattle, WA, USA home for the winter months. This is where our offices are headquartered. In the summers you can find me bouncing between the Amalfi Coast and the Greek Islands. I love to travel and explore new places in an active and meaningful way. I work with many colleagues around the world to offer our guests the best local experiences. Bringing good tourism to these amazing communities is my passion.</p>
                        <p>Beyond planning for destination weddings, we also have options for solo travelers, couples as well as groups and family reunions.</p>
                        <p>Planning a wellness or photography retreat? We can also help by being the travel planning support as well as manage your event registrations.</p>
                        <p>Thanks for stopping by — I hope we can help plan your next unforgettable getaway!
                            -Erin Lindeman</p>
                    </div>
                </div>
                <div className="about-content">
                    <h4>Why are we so passionate</h4>
                    <h3>YOU IMAGINE YOUR DREAM VACATION, AND WE MAKE THAT DREAM A REALITY. </h3>
                    <div>
                        <p>There is a significant distinction between those who love to travel and those who enjoy planning travel. At our core, we excel in understanding our clients and leveraging our expertise, knowledge, and connections to not only meet but exceed their expectations. We save you countless hours and energy, allowing you to focus on what truly matters to you. We delight in crafting unforgettable vacations for those who appreciate elevated experiences.</p>

                        <p>If you're ready to embark on the journey of your dreams, we are eager to hear from you. Your first step is to fill out the Contact Form, and we promise to make the process enjoyable and straightforward. Our goal is to truly understand who you are and what you're seeking. Your vacation will be meticulously curated just for you, utilizing our global expertise and connections to ensure you're treated like the VIP you are. Simply arrive at the airport with your bags packed, and we'll handle the rest!</p>
                    </div>
                    <Link to="/contact" className='contact-link'><button className='contact-btn'>
                        PLAN YOUR TRIP</button>
                    </Link>
                </div>

            </div>
        </motion.div>
    )
}

export default About