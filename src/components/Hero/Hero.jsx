import './Hero.css'
import HeroImg from '../assets/Hero-image/men.png';
import { motion, useDragControls } from 'framer-motion';
import Navbar from '../Navbar/Navbar';



const variants = {
  initial:{
    x: -500,
    opacity: 0
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
       duration: 1,
       staggerChildren: 0.1
    }
  }
}

const Hero = () => {

  const controls = useDragControls()

   


    return (
        <>  
         
        <motion.section className='hero' initial="initial" whileInView="animate">
          <Navbar/>     
          <div className='hero-wrapper'>
            <motion.div className="text-container" variants={variants}>
              <motion.p className='intro-text' variants={variants}>Hello everyone, welcome to my portfollio</motion.p>
              <motion.h2 className='main-heading' variants={variants}>
                <span className='iam-text'>I'AM</span> <span className='name-text'>ALTAMASH HABIB</span>
                 <motion.div className="points" drag="x" useDragControls={controls}></motion.div> 
              </motion.h2>
              <motion.h3 className='job-title' variants={variants}>FULL STACK DEVELOPER</motion.h3>
              <motion.a href="" className='cv-link' variants={variants}>Download CV</motion.a>
              </motion.div>
              <div className='image-container'>
              <img src={HeroImg} alt=""/>
              </div>
              </div>
            </motion.section>
        </>
    )
}

export default Hero