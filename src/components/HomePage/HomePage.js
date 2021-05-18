import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjMain} from '../HomePage/Data';

const HomePage = () => {
  return (
    <>
      <HeroSection {...homeObjMain} />
    </>
  )
}

export default HomePage;