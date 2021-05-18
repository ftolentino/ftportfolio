import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import {homeObjMain} from '../HomePage/Data';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection {...homeObjMain} />
    </div>
  )
}

export default HomePage;