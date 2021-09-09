import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import {about} from '../HomePage/Data';
import './About.css';

const About = () => {
  return (
    <div className="homepage">
      <AboutSection {...about} />
    </div>
  )
}

export default About;