import React from 'react'
import Hero from '../../hero/Hero'
import Destinations from '../../destinations/Destinations'
import { motion } from "framer-motion"


function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <Destinations />
        </motion.div>
    )
}

export default Home