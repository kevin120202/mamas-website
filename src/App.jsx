import React from "react"
import "./index.css"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Travel from "./components/pages/travel/Travel"
import Contact from "./components/pages/contact/Contact"
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
