import React from "react";
import { IonIcon } from "@ionic/react";
import { handLeft } from "ionicons/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
import { profile } from "../../assets";
import { casual } from "../../assets";
import { MagicStar } from "../../assets/svg";

const Hero = () => {
 
  return (
    <section className='section-hero' id='home'>
      <div className='hero-grid'>
        {/* TEXT LEFT SIDE */}
        <div className='hero-text-box grid-item'>
          {/* <p>🖐️Hey, I'm</p> */}
          <p>
            <IonIcon className='icon-hand' icon={handLeft}></IonIcon> Hello, I'm
          </p>
          {/* <h1>Alexander Chepkiyeng</h1> */}
          <h1>Alexander</h1>
          <p>Systems Engineer & Web-app Developer</p>
          <span className='caption '>
            <p>
              Building products that feel{" "}
              <span className='magic'>
                {" "}
                <span className='magic-star'>
                  <svg viewBox='0 0 512 512'>
                    <path
                      class='fa-primary'
                      d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z'
                    />
                  </svg>
                </span>
                <span className='magic-star'>
                  <svg viewBox='0 0 512 512'>
                    <path
                      class='fa-primary'
                      d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z'
                    />
                  </svg>
                </span>
                <span className='magic-star'>
                  <svg viewBox='0 0 512 512'>
                    <path
                      class='fa-primary'
                      d='M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z'
                    />
                  </svg>
                </span>
                <span className='magic-text'>magical</span>
                {""}
              </span>
              .
            </p>
            {/* <p>You only have one chance to make a first impression.</p>
            <p>Let's make it an amazing one.</p> */}
          </span>
          <AnchorLink href='#contact'>
            <button className='primary-btn'>Let's talk</button>
          </AnchorLink>
        </div>
        {/* IMAGE BOX - RIGHT SIDE */}
        <div className='hero-img-box grid-item'>
          <div className='img-box'>
            <div
              style={{
                backgroundImage: `url(${casual})`,
                content: "",
                display: "flex",
                height: "100%",
                objectFit: "contain",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "lighten",
                borderRadius: "100px",
                border: "0px",
              }}
            ></div>
            {/* <img className="hero-img" src={casual} alt='developer' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
