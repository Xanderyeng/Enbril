import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import './services.css'

const ServiceCard = ({ index, text, title, icon }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.75 * index, 0.75)} className='services-box'>
    {icon}
    <div className='card' options={{ max: 5, scale: 1, speed: 450 }}>
      <h3 className='service-title'>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  </motion.div>
  )
}

export default ServiceCard