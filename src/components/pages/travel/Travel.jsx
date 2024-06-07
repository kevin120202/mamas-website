import React from 'react'
import { motion } from "framer-motion"
import "./Travel.css"
import boracay from "../../../assets/boracay-republic-of-the-philippines.jpg"
import danang from "../../../assets/danang-vietnam-dragon-bridge.jpg"
import singapore from "../../../assets/singapore-universal-studios.jpg"
import korea from "../../../assets/korea-temple-.jpg"
import taiwan from "../../../assets/taiwan-dragon.jpg"
import japan from "../../../assets/japan-temple.jpg"

function Travel() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='travel'>
            <div className="container">
                <h1>Travel</h1>
                <div className="recent-travel-container">
                    <div className="recent-travel-imgs">
                        <div className='travel-locations'>
                            <img src={boracay} alt="" className='boracay' />
                            <div className='caption'>
                                <p className='boracay-location'>Boracay, Philippines</p>
                            </div>
                        </div>
                        <div className='travel-locations'>
                            <img src={danang} alt="" className='danang' />
                            <div className="caption">
                                <p className='danang-location'>Danang, Vietnam</p>
                            </div>
                        </div>
                        <div className='travel-locations'>
                            <img src={singapore} alt="" className='universal' />
                            <div className="caption">
                                <p className='universal-location'>Universal Studios, Singapore</p>
                            </div>
                        </div>
                        <div className='travel-locations'>
                            <img src={korea} alt="" className='korea' />
                            <div className="caption">
                                <p className='korea-location'>Korea</p>
                            </div>
                        </div>
                        <div className='travel-locations'>
                            <img src={taiwan} alt="" className='taiwan' />
                            <div className="caption">
                                <p className='korea-location'>Taiwan</p>
                            </div>
                        </div>
                        <div className='travel-locations'>
                            <img src={japan} alt="" className='japan' />
                            <div className="caption">
                                <p className='korea-location'>Japan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Travel