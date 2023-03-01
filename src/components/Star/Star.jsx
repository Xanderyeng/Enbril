import React from "react";
import Style from "style-it";

export const Star = ({color,scale,top,right, blur}) => {
  return Style.it(
    `
    :root {
      --star-purple: rgba(225, 43, 255, 1);
      --star-greenish: rgba(82, 169, 169, 1);
      --star-light: rgba(193, 62, 255, 1);
      --star-turquoise:rgba(48, 255, 243, 1);
      --star-blue: rgba(62, 93, 255, 1);
    }
    .blur {
      -webkit-filter: blur(${blur});
      filter: blur(${blur});
    }
    
    .star-five {
      position: relative;
      top: ${top}; 
      right: ${right}; 
      /* filter: blur(10px); */
      z-index: 1;
    }
     
    #star-five {
      margin: 1em auto;
      font-size: 10em;
      position: absolute;
      display: block;
      width: 0px;
      height: 0px;
      border-right: 1em solid transparent;
      border-bottom: 0.7em solid ${color};
      border-left: 1em solid transparent;
      /* border: 1px solid #000000; */
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: rotate(35deg);
      transform: scale(${scale});
      z-index: 1;
    }
    #star-five:before {
      border-bottom: 0.8em solid ${color};
      border-left: 0.3em solid transparent;
      border-right: 0.3em solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -0.45em;
      left: -0.65em;
      display: block;
      content: "";
      /* transform: scale(1); */
      transform: rotate(-35deg);
    }
    #star-five:after {
      position: absolute;
      display: block;
      top: 0.03em;
      left: -1.05em;
      width: 0;
      height: 0;
      border-right: 1em solid transparent;
      border-bottom: 0.7em solid ${color};
      border-left: 1em solid transparent;
      transform: rotate(-70deg);
      content: "";
    }
  `,
    <div className='star-five pruple'>
      <div id='star-five' className='blur'></div>
    </div>
  );
};
