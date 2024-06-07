import React from 'react'
import { motion } from "framer-motion"

function Travel() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>Travel</motion.div>
    )
}

export default Travel