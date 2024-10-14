import { motion, useScroll, useSpring } from 'framer-motion';
import AboutImg from '../assets/about-img/img.jpg'
import './About.css';
import { useRef } from 'react';


const About = () => {

const ref = useRef();

const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress,{
    stiffness: 80,
    damping: 50,
});

    // image container and text animation animation
    
    const variants = {
      initial:{
        y:500,
        opaction: 0
      },
      animate:{
        y: 0,
        opacity:1,
        transition:{
          duration:1,
          staggerChildren: 0.1
        }
      }
    }

    
  





  
  return (
    <motion.div className='about-section' initial="initial" whileInView="animate">
       <div className="progress">
            <h2>About</h2>
            <motion.div className="progress-bar" style={{scaleX}}></motion.div>
        </div>
      <div className='about-wrapper'>
       <motion.div className='about-image' variants={variants}>
        <img src={AboutImg} alt="" />
       </motion.div>
       <div className='about-content'>
         <motion.p className='about-desc' variants={variants}>
            Hello everyone my name is Altamash habib. i am from uttar pradesh
            but i am living in pune for work. I have compeleted my graduation (BCA)
            in 2019 from jamia hamdard university. I have learn some Technology. I have some experince in the telecalling field i have 1 year
            of experine in telecalling</motion.p>       
            <motion.div className='about-row' variants={variants}>
              <motion.div className='col' variants={variants}>
              <p>Name <span>:</span></p>
              <p>Date of Birth <span>:</span></p>
              <p>Graduation <span>:</span> </p>
              <p>College <span>:</span> </p>
              <p>passing year <span>:</span> </p>
              <p>contact <span>:</span> </p>
              <p>Location <span>:</span> </p>
              </motion.div>
              <motion.div className='col' variants={variants}>
              <p>Altamash habib</p>
              <p>20/12/1998</p>
              <p>BCA</p>
              <p>Jamia Hamdard</p>
              <p>2019</p>
              <p>+91-8840172245</p>
              <p>Pune, maharastra</p>
              </motion.div>
          </motion.div>
        </div>
        </div>
    </motion.div>
  );
};

export default About;
