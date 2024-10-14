import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './Project.css'
import { useRef } from 'react'



const items = [
    {
        id: 1,
        title: "E-commerce Electronic static website",
        img: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
        desc: "This is a simple E-commerce Electronic static website which is created by HTML, Bootstrap, and CSS",
        link: "Http//www.ecommerce website.com"
    },
    {
        id: 2,
        title: "Todo MERN Stack App",
        img: "https://plus.unsplash.com/premium_photo-1683309563255-fef9e541cdec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww",
        desc: "This is Simple Dynamic Todo App where user can Add Todo, Delete Todo, Update Todo",
        link: "Http//www.Todo App Mernstack.com"
    }
]


const Single = ({item})=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref
    });

     const y = useTransform(scrollYProgress, [0,1], [-100, 100]);

     return(
        <section>
           <div className='container'>
            <div className='wrapper'>
                <div className='imgContainer' ref={ref}>
                 <img src={item.img} alt="" />
              </div> 
            <motion.div className='textContainer' style={{y}}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="">{item.link}</a>
            </motion.div>
            </div> 
            </div>
        </section>
     )
}


const Project = () => {

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
    <div className='project' ref={ref}>
        <div className="progress">
            <h2>My Projects</h2>
            <motion.div className="progress-bar" style={{scaleX}}></motion.div>
        </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Project