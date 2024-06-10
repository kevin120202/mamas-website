import React, { useEffect } from 'react'
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
import AOS from "aos"
import "aos/dist/aos.css"

function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='destinations' data-aos="fade-up">
            <div className="container">
                <div className="img-grid">
                    <img src={img_1} alt="Bangkok" data-aos="fade-up" />
                    <img src={img_2} alt="Buddha" data-aos="fade-down" />
                    <img src={img_3} alt="Calaguas" data-aos="fade-right" />
                    <img src={img_4} alt="Water" data-aos="fade-left" />
                    <img src={img_5} alt="Woman" data-aos="fade-up" />
                    <img src={img_6} alt="China" data-aos="fade-up" />
                    <img src={img_7} alt="Beijing" data-aos="fade-up" />
                    <img src={img_8} alt="Korea" data-aos="fade-up" />
                </div>
                <div className="description" data-aos="fade-right">
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
