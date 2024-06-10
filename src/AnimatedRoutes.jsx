import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react'
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Travel from "./components/pages/travel/Travel"
import Contact from "./components/pages/contact/Contact"
import { AnimatePresence } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"


function AnimatedRoutes() {
    const location = useLocation()

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} data-aos="fade-up" />
                <Route path="/about" element={<About />} data-aos="fade-up" />
                <Route path="/travel" element={<Travel />} data-aos="fade-up" />
                <Route path="/contact" element={<Contact />} data-aos="fade-up" />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes