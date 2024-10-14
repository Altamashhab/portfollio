import React from 'react'
import {motion} from 'framer-motion'
const ToggleButton = ({ setOpen, open}) => {

  return (
    <motion.button onClick={() => setOpen((prev) => !prev)}>
     <motion.div className='hamburger line1'
     animate={{rotate: open ? 45 : 0, y: open ? 2 : 0}}
     transition={{duration: 0.1}}></motion.div>

     <motion.div className='hamburger line2'
     animate={{rotate: open ? -45 : 0, y: open ? -5 : 0}}
     transition={{duration: 0.1}}></motion.div>
    </motion.button>
  )
}

export default ToggleButton