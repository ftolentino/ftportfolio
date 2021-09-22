import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import {about} from '../../utils/Data';

const About = () => {
  return (
    <div>
      <AboutSection {...about} />
    </div>
  )
}

export default About;