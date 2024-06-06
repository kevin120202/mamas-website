import React from 'react'
import "./Footer.css"
import logo from "../../assets/coco-suns-logo.jpeg"
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <img src={logo} alt="Logo image." />
                <p>© Coco & Sun Travel and Tours</p>
                <div className='social-links'>
                    <button className='facebook-btn'>
                        <FaFacebookSquare className='icon social-icon-hover' />
                    </button>
                    <button className='email-btn'>
                        <IoMdMailUnread className='icon social-icon-hover' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer