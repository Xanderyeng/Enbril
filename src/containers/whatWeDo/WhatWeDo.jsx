import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import "./whatwedo.css";
import { backend } from "../../assets";
import { frontEnd } from "../../assets";
import { visual } from "../../assets";
// import { svgLeft } from "../../assets";
// import { svgRight } from "../../assets";
import { services } from "../../constants";
// import { Service } from "../../components";
import ServiceCard from "../../components/what-we-do/ServiceCard";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StarWrapper } from "../../hoc";
// import pStar from "../../assets/Purple Star.svg"

const WhatWeDo = () => {
  return (
    <>
    <div className="spacer"></div>
      <SectionHeader
        subTitle={"services"}
        title1={"I provide wide range of"}
        title2={"digital services"}
      />
      <div className='container' id="container">
        {/* <span className='subheading'>
          {svgLeft}
          Services
          {svgRight}
        </span>
        <h2 className='heading-secondary'>
          <p>I provide wide range of</p>
          <p>digital services</p>
        </h2> */}
        <div className='services-grid'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
          {/* <Service
            icon={visual}
            title={"aesthetics"}
            text={
              "Creating a cohesive visual language that connects your brand to your audience"
            }
          />
          <Services
            icon={frontEnd}
            title={"front-end"}
            text={
              "I provide front end development services for an interactive and visually appealing user experience."
            }
          />
          <Services
            icon={backend}
            title={"backend"}
            text={
              "I provide backend development services to power website features, security and integration."
            }
          /> */}
          {/* <div className='services'>
            {visual}
            <header>
              <h3 className='service-title'>visual design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
          {/* <div className='services'>
            {frontEnd}
            <header>
              <h3 className='service-title'>front-end development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
          {/* <div className='services'>
            {backend}
            <header>
              <h3 className='service-title'>backend development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                volutpat faucibus pulvinar Nam luctus.
              </p>
            </header>
          </div> */}
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default StarWrapper(WhatWeDo, "services");
