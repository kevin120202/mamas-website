import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/coco-suns-logo.jpeg"


function Navbar() {
    const [active, setActive] = useState(false)
    const location = useLocation()

    // useEffect(() => {
    //     setActive(false)
    // }, [location])

    const handleChange = () => {
        setActive(active => !active)
    }

    return (
        <div className={active ? "navbar navbar-bg" : "navbar"}>
            <div className="logo">
                <h2><Link to="/" className={location.pathname !== "/" || active ? "dark" : location.pathname !== "/" ? "dark" : ""}>Coco & Sun Travel and Tours</Link></h2>
            </div>
            <ul className="nav-menu">
                <li><Link to="/" className={location.pathname !== "/" ? "dark" : ""}>Home</Link></li>
                <li><Link to="/about" className={location.pathname !== "/" ? "dark" : ""}>About</Link></li>
                <li><Link to="/travel" className={location.pathname !== "/" ? "dark" : ""}>Travel</Link></li>
                <li><Link to="/contact" className={location.pathname !== "/" ? "dark" : ""}>Contact</Link></li>
            </ul>
            <div className={active ? "hamburger dark" : "hamburger"} onClick={handleChange}>
                {active ? <IoMdClose className='icon' /> :
                    location.pathname !== "/" ?
                        <RxHamburgerMenu className="icon dark" /> : <RxHamburgerMenu className="icon" />}
            </div>
            <div className={active ? `mobile-menu active` : `mobile-menu`}>
                <ul className='mobile-nav'>
                    <li><Link to="/" className={active ? "dark" : ""}>Home</Link></li>
                    <li><Link to="/about" className={active ? "dark" : ""}>About</Link></li>
                    <li><Link to="/travel" className={active ? "dark" : ""}>Travel</Link></li>
                    <li><Link to="/contact" className={active ? "dark" : ""}>Contact</Link></li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="social-icons">
                        <FaFacebook className='icon social-icon-hover' />
                        <IoMdMail className='icon social-icon-hover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar