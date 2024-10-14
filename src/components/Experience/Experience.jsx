import { motion, useSpring, useScroll } from 'framer-motion';
import  './Experience.css'
import { useRef } from 'react';


const Experience = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 80,
        damping: 50,
    });



    // animation for content

    const variants = {
        initial:{
          y: 500,
          opacity: 0
        },
        animate:{
          y: 0,
          opacity: 1,
          transition:{
            duration: 1,
            staggerChildren: 0.1
          }
        }
    }


  return (
    <>
    <motion.div className='experience-section' initial="initial" whileInView="animate">
    <div className="progress">
            <h2>Experience</h2>
            <motion.div className="progress-bar" style={{scaleX}}></motion.div>
        </div>
        <div className='experience-wrapper'>
        <motion.div className='experience-row' variants={variants}>
            <motion.div className='experience-col'>
                <motion.p className='year'>2022 - 2022 :</motion.p>
                <motion.h4 className='comp-name'>DBS Mintek Private Limited</motion.h4>
                <motion.h6 className='role'>Collection Executive</motion.h6>
                <motion.p className='job-desc'>
                i worked as a collection excutive where i was used
                to call the customer for their loan of new bike and
                inform them to pay amount on time otherwise civil will
                be down </motion.p>
            </motion.div>
            <motion.div className='experience-col'>
            <motion.p className='year'>2022 - 2023 </motion.p>
            <motion.h4 className='comp-name'>Bharti Axa Private Limited</motion.h4>
                <motion.h6 className='role'>Sales Executive</motion.h6>
                <motion.p className='job-desc'>
                i worked as a sales excutive where i was used
                to call the customer and tell about bharti Axa
                guranteed plan to the customer and convience them
                to take this plan for their bright future 
                </motion.p>
            </motion.div>
        </motion.div>
    </div>
    </motion.div>
    </>
  )
}

export default Experience