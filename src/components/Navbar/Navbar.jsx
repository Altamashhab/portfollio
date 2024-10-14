import React from 'react'
import './Navbar.css';
// social icon link
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';
import { easeInOut, motion } from 'framer-motion';




const circleVariants = {
    initial:{
        scale: 0.9,
        backgroundColor: '#1e90ff'
    },
    animate:{
        scale:[0.9, 1.1,0.9],
        transition:{
            duration: 1,
            ease: 'easeInOut',
            backgroundColor: ['#1e90ff', '#ff6347', '#1e90ff'],
            repeat: Infinity,
            repeatType: 'mirror'
        }
    }
}



const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar/>
            <div className='navbar-wrapper'>
                 <div className='logo'>
                    <h1>A<span>H</span></h1>
                    <motion.div className="logo-circle" variants={circleVariants}></motion.div>
                 </div>
                <div className='social-icon'>
                    <a href=""><FaLinkedinIn/></a>
                    <a href=""><FaGithub/></a>
                    <a href=""><FaInstagram/></a>
                    <a href=""><FaFacebookF/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar