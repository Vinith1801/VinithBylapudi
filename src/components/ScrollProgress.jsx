'use client'

import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            // className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 z-40 origin-left"
             className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_#3b82f6] z-40 origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    )
}
