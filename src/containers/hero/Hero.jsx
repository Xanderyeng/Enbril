import React from "react";
import { IonIcon } from "@ionic/react";
import { handLeft } from "ionicons/icons";
import "./hero.css";
import { profile } from "../../assets";
import {casual} from "../../assets"

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero-grid'>
        <div className='hero-text-box grid-item'>
          {/* <p>🖐️Hey, I'm</p> */}
          <p>
            <IonIcon className='icon-hand' icon={handLeft}></IonIcon> Hello, I'm
          </p>
          {/* <h1>Alexander Chepkiyeng</h1> */}
          <h1>Alexander</h1>
          <p>Web Developer & IT Professional</p>
          <span className='caption '>
            <p>You only have one chance to make a first impression.</p>
            <p>Let's make it an amazing one.</p>
          </span>
          <button className='primary-btn'>Let's talk</button>
        </div>
        <div className='hero-img-box grid-item'>
          <div className='img-box'>
            <div style={{backgroundImage: `url(${casual})`, content:'', display: 'flex', height:'100%', objectFit:'contain', backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundBlendMode:'lighten', borderRadius:'100px',border:'0px'}}></div>
          {/* <img className="hero-img" src={casual} alt='developer' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
