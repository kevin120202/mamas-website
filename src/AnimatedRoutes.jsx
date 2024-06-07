import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react'
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Travel from "./components/pages/travel/Travel"
import Contact from "./components/pages/contact/Contact"
import { AnimatePresence } from "framer-motion"


function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes