import React from "react";
import { Features } from "../../components";
import { searching } from "../../assets";
import { development } from "../../assets";
import { updating } from "../../assets";
import { visual } from "../../assets";
import "./how.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const How = () => {
    

  return (
    <section className='section-how-it-works' id="how-we-do-it">
    <SectionHeader subTitle={'process'} title1={'how'}/>
    {/* <h2>How</h2> */}
      <div className='container grid grid--4-cols grid--2-cols grid--1-cols'>
      {/* is essential for any successful website project, and I offer creative yet practical solutions to help bring your visions to life. */}
        <Features icon={searching} title={'planning'} details={'creative yet practical solutions to help bring your visions to life.'}/>
        <Features icon={visual} title={'design'} details={'Engaging website visuals that reflect your unique brand indentity.'}/>
        {/* <Features icon={development} title={'development'} details={'Briging creativity and expertise to deliver exceptional results.'}/> */}
        <Features icon={development} title={'development'} details={'Bringing creativity and expertise to bring your project to life'}/>
        <Features icon={updating} title={'launch'} details={'Secure light speed hosting to unveil your project to the world.'}/>
        {/* <Features icon={updating} title={'launch'} details={'Maximum visibility on fast, secure hosting to unveil your project.'}/> */}
      </div>
    </section>
  );
};

export default How;
