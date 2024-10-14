import { motion } from 'framer-motion'
import  './Contact.css'
import PhoneSVG  from '../assets/Contact image/phone-icon.svg'
import { FiPhoneCall } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';





const variants = {
    initial:{
      y: 500,
      opacity: 0
    },
    animate:{
      y: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        staggerChildren: 0.1,
      }
    }
}


const Contact = () => {

const formRef = useRef()
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6b4mhj8', 'template_zzlne1j', formRef.current, 'QAlnAYiiqwlUrwGNB')
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };


  return (
    <>
    <motion.div className='contact' initial="initial" whileInView="animate">
      <div className='contact-wrapper'>
      <motion.div className='contact-textContainer' variants={variants}>
        <motion.h2 variants={variants}>Let's talk together</motion.h2>
        <motion.div className='item' variants={variants}>
         <h4>Mail</h4>
         <span>altamashhabib786@gmail.com</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
         <h4>Address</h4>
         <span>Pune</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
         <h4>Phone number</h4>
         <span>+91 - 8840172245</span>
        </motion.div>
      </motion.div>
      <motion.div className='formContainer' variants={variants}> 
        <motion.span className='phone-svg' 
        initial={{opacity: 1}}
        whileInView={{opacity:0}}
        transition={{delay:3, duration:1}}><FiPhoneCall/></motion.span>

        <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 3.5, duration: 1}} ref={formRef} onSubmit={sendEmail}>
           <input type="text" required placeholder='Enter Your Name' name='name'/>
           <input type="email" required placeholder='Enter Your email' name='email'/>
           <textarea rows={3} placeholder='message' name='message'></textarea>
           <input type="submit" value="Submit" className='form-btn' />
           {error && "Error"}
           {success && "Success"}
        </motion.form>
      </motion.div>
      </div>
    </motion.div>
    </>
  )
}

export default Contact