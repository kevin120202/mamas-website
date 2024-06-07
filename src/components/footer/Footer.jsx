import React from 'react'
import "./Footer.css"
import logo from "../../assets/coco-suns-logo.jpeg"
import { FaFacebookSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <img src={logo} alt="Logo image." />
                <p>© Coco & Sun Travel and Tours</p>
                <div className='social-links'>

                    <button className='facebook-btn'>
                        <a href="https://www.facebook.com/cocoandsuntravelandtours/" className='link-facebook' target='_blank'>
                            <FaFacebookSquare className='icon social-icon-hover' />
                        </a>
                    </button>
                    <Link to="/contact">
                        <button className='email-btn'>
                            <IoMdMailUnread className='icon social-icon-hover' />
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer