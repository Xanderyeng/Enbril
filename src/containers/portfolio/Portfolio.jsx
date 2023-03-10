import React from "react";
import { Tabs } from "../../components";
import ProjectLayout from "../../components/projects/msry";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { StarWrapper } from "../../hoc";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio-section' id="portfolio">
      <div className='container'>
      <SectionHeader subTitle={'portfolio'} title1={'take a look at some of'} title2={'my work'} setOnElipse/>
        <div className='portfolio-tabs'>
          <Tabs/>
        </div>
        <div className='portfolio-msry'>
         <ProjectLayout/>
        </div>
      </div>
    </section>
  )
};

// export default StarWrapper(Portfolio, 'portfolio');
export default Portfolio;