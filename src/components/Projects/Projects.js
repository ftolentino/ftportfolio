import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../HomePage/Data';


const Projects = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default Projects;