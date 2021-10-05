import React from 'react';
import '../Skills/Skills.css';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCsswizardry, 
  SiReact, 
  SiGithub ,
  SiSass,
  SiBootstrap,
  SiVisualstudiocode,
  SiAdobephotoshop
} from 'react-icons/si';
import { DiNodejs, DiCodeBadge } from 'react-icons/di';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="title-container">
        <DiCodeBadge className="icon-container" />
        <h3>Skills</h3>
      </div>
      <div className="icon-container">
        <SiJavascript className="skill-icon" />
        <DiNodejs className="skill-icon" />
        <SiHtml5 className="skill-icon" />
        <SiCsswizardry className="skill-icon" />
        <SiSass className="skill-icon" />
        <SiReact className="skill-icon" />
        <SiBootstrap className="skill-icon" />
        <SiGithub className="skill-icon" />
        <SiAdobephotoshop className="skill-icon" />
        <SiVisualstudiocode className="skill-icon" />
      </div>
    </div>
  );
}

export default Skills;