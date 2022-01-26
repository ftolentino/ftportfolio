import React from 'react';
import '../Skills/Skills.css';
import { 
  SiJavascript,
  SiReact, 
  SiGithub ,
  SiSass,
  SiBootstrap,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiNpm,
  SiTailwindcss
} from 'react-icons/si';
import { DiNodejs, DiCodeBadge, DiCss3, DiHtml5 } from 'react-icons/di';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="title-container">
        <DiCodeBadge />
        <p>Skills</p>
      </div>
      <div className="icon-container">
        <div className="skill-icon">
          <SiJavascript className="skill-js" />
          <p>Javascript</p>
        </div>
        <div className="skill-icon">
          <DiHtml5 className="skill-html" />
          <p>HTML5</p>
        </div>
        <div className="skill-icon">
          <DiCss3 className="skill-css" />
          <p>CSS</p>
        </div>
        <div className="skill-icon">
          <SiSass className="skill-sass" />
          <p>Sass</p>
        </div>
        <div className="skill-icon">
          <SiReact className="skill-react" />
          <p>React</p>
        </div>
        <div className="skill-icon">
          <SiBootstrap className="skill-bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-icon">
          <SiGithub className="skill-github" />
          <p>Github</p>
        </div>
        <div className="skill-icon">
          <SiAdobephotoshop className="skill-ps" />
          <p>Adobe Photoshop</p>
        </div>
        <div className="skill-icon">
          <SiVisualstudiocode className="skill-vscode" />
          <p>Visual Studio Code</p>
        </div>
        <div className="skill-icon">
          <DiNodejs className="skill-nodejs" />
          <p>NodeJS</p>
        </div>
        <div className="skill-icon">
          <SiNpm className="skill-npm" />
          <p>Npm</p>
        </div>
        <div className="skill-icon">
          <SiTailwindcss className="skill-tailwind" />
          <p>TailwindCSS</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;