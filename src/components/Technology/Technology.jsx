import  './Technology.css'
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";






const Technology = () => {

  const iconVariants = (duration) => ({
      intitial: {
        y: -10
      },
      animate:{
        y: [10, -10],
        transition:{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse'
        },
      },
  });


const ref = useRef();

const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress,{
    stiffness: 80,
    damping: 50,
});



  return (
    <div className='technology'>
      <div className="progress">
            <h2>Technology</h2>
            <motion.div className="progress-bar" style={{scaleX}}></motion.div>
        </div>
     <div className='technology-group'>
        <div className='technology-group-item'>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><FaHtml5/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><FaCss3/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><IoLogoJavascript/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><FaBootstrap/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><RiReactjsFill/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><FaNodeJs/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><SiExpress/></motion.a>
           <motion.a variants={iconVariants(2.5)} intitial="initial" animate="animate"><DiMongodb/></motion.a> 
        </div>
     </div>
    </div>
  )
}

export default Technology