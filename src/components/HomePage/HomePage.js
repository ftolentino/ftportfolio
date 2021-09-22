import React from 'react';
import HomePageSection from '../HomePageSection/HomePageSection';
import {homeObjMain} from '../../utils/Data';

const HomePage = () => {
  return (
    <div className="home__page-section">
      <HomePageSection {...homeObjMain} />
    </div>
  )
}

export default HomePage;