import React from 'react'
import "./Destination.css"
import { Link } from "react-router-dom"
import img_1 from "../../assets/img1-bangkok.jpg"
import img_2 from "../../assets/img2-buddha.jpg"
import img_3 from "../../assets/img3-calaguas.jpg"
import img_4 from "../../assets/img4-water.jpg"
import img_5 from "../../assets/img5-woman.jpg"
import img_6 from "../../assets/img6-china.jpg"
import img_7 from "../../assets/img7-beijing.jpg"
import img_8 from "../../assets/img8-korea.jpg"


function Destinations() {
    return (
        <div className='destinations'>
            <div className="container">
                <div className="img-grid">
                    <img src={img_1} alt="Bangkok" />
                    <img src={img_2} alt="Buddha" />
                    <img src={img_3} alt="Calaguas" />
                    <img src={img_4} alt="Water" />
                    <img src={img_5} alt="Woman" />
                    <img src={img_6} alt="China" />
                    <img src={img_7} alt="Beijing" />
                    <img src={img_8} alt="Korea" />
                </div>
                <div className="description">
                    <p>Full-service travel agency supporting unforgettable journeys across Asia. We specialize in family retreats, group travel, honeymoons, and more.</p>
                    <p className='destinations-subtext'>Experts in Asian destinations including Thailand, Bali, Japan, Vietnam, Malaysia, Singapore, China, India, and beyond.</p>
                    <Link to="/about" className='about-link'><button className='about-btn'>
                        ABOUT</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Destinations
