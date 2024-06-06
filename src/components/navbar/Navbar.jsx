import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Navbar() {
    const [active, setActive] = useState(false)
    const location = useLocation()

    const handleChange = () => {
        setActive(active => !active)
    }

    // const getClassName = () => {
    //     if()
    // }

    console.log(location);

    return (
        <div className={active ? "navbar navbar-bg" : "navbar"}>
            <div className="logo">
                <h2><Link to="/" className={active ? "title dark" : "title"}>Coco & Sun Travel and Tours</Link></h2>
            </div>
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/travel">Travel</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={active ? "hamburger dark" : "hamburger"} onClick={handleChange}>
                {active ? <IoMdClose className='icon' /> : <RxHamburgerMenu className="icon" />}
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
                        <FaFacebook className='icon' />
                        <IoMdMail className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar