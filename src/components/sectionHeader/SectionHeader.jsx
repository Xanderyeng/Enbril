import {React, useState} from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { svgLeft } from "../../assets";
import { svgRight } from "../../assets";
import { elipse } from "../../assets/svg";
import './sectionHeader.css'

const SectionHeader = (props) => {

  const[onElipse,setOnElipse] = useState(true);
  return (
    
    <motion.div variants={textVariant()} className="section-header">
      <span className='subheading'>
        {svgLeft}
        {props.subTitle}
        {svgRight}
      </span>
      <h2 className='heading-secondary'>
        <p>{props.title1}</p>
        <p>{props.title2}</p>
      </h2>  
      {onElipse ? <span className="elipse">{elipse}</span>: setOnElipse} 
    </motion.div>
  );
};

export default SectionHeader;
