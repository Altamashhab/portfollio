import { animate, motion } from 'framer-motion'
import React from 'react'



const variants ={
  open:{
    transition:{
      staggerChildren: 0.1,
    },
  },
  closed:{
     transition:{
      staggerChildren: 0.05,
      staggerDirection: -1,
     }
  }
}

const Itemvariants ={
  open:{
    y: 0,
    opacity: 1
  },
  closed:{
     y: 50,
     opacity:0
  }
}







const Links = () => {

  const items = [
    "home",
    "about",
    "technology",
    "project",
    "experience",
    "contact"
  ];
  
  return (
    <motion.div className='link' variants={variants}>
      {items.map(item => (
        <motion.a href={`#${item}`} key={item} variants={Itemvariants} whileHover={{y: -5, transition:{duration: 1}}}>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links