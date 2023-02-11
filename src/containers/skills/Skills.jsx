import { React, useState, useEffect } from "react";
import SkillsBar from "../../components/SkillsBar/SkillsBar";
import "./skills.css";
// import { searching } from "../../assets";

const Skills = (props) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className='skills-glass-card'>
      <div className='skills-glass-box'>
        {/*TO REPLACE WITH PROP  */}
        <div className='skills-logo-svg'>{props.SVG}</div>
          <div className='skills-progress-bar'>
            {/* <SkillsBar bgcolor={"#6a1b9a"} completed={completed} />
          <SkillsBar/> */}
          </div>
        <div className='skill-details'>
          <span className='skills-logo-percentage'>{props.percentage}</span>
          <p className='skill-name'>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
