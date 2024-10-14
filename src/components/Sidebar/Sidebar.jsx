import { useState } from 'react'
import Links from './Links/Links'
import './Sidebar.css'
import ToggleButton from './ToggleButton/ToggleButton'
import { motion} from 'framer-motion'

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const Sidebar = () => {

const [open, setOpen] = useState(false);

const variants = {
  open:{
    clipPath: 'circle(1200px at 50px 50px)',
    transition:{
      type: "spring",
      stiffness: 40,
      damping: 40,
    },
  },
  closed:{
    clipPath: 'circle(20px at 50px 50px)',
    transition:{
      type: "spring",
      delay: 0.5,
      stiffness: 300,
      damping: 40
    },
  },
};


  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
            <Links/>
            <div className='social-icon-sidebar'>
           <a href=""><FaLinkedinIn/></a>
           <a href=""><FaGithub/></a>
           <a href=""><FaWhatsapp/></a>
        </div>
        <div className='circle'></div>
        </motion.div>
         <ToggleButton open={open} setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar