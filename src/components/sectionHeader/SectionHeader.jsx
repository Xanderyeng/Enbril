import {React, useState} from "react";
import { svgLeft } from "../../assets";
import { svgRight } from "../../assets";
import { elipse } from "../../assets/svg";
import './sectionHeader.css'

const SectionHeader = (props) => {

  const[onElipse,setOnElipse] = useState(true);
  return (
    <div className="section-header">
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
      
    </div>
  );
};

export default SectionHeader;
