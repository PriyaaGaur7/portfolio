import React from 'react'
import { motion } from "framer-motion"
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai"

const Services = () => {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        twoAndthree: {
            opacity: 0,
            y: "-100%",
        },
        four: {
            opacity: 0,
            x: "100%",
        },
    }
return (
    <div id="services">
        <h2>Services</h2>
        <section>
                
            <motion.div className="serviceBox1" whileInView={animations.whileInView} initial={animations.one}>
                <h3>5+</h3>
                <p>Years Experience in Programming</p>
            </motion.div>
            <motion.div className="serviceBox2" whileInView={animations.whileInView} initial={animations.twoAndthree}>
                <AiFillIeCircle />
                <span>Web Devlopment</span>
            </motion.div>
            <motion.div className="serviceBox3" whileInView={animations.whileInView} initial={animations.twoAndthree} transition={{delay: 0.2}}>
                <AiFillAndroid />
                <span>Android Devlopment</span>
            </motion.div>
            <motion.div className="serviceBox4" whileInView={animations.whileInView} initial={animations.four}>
                <AiFillWindows />
                <span>Desktop Devlopment</span>
            </motion.div>
        </section>
    </div>
)
}

export default Services