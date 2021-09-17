import React from 'react';
import './HomePageSection.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

const HomePageSection = ({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, shadow, img, alt}) => {
  return (
    <>
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className="container">
          <div className="home__hero-row">
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                <Link to="/contact">
                  <Button buttonSize='btn--medium' buttonColor='blue'>{buttonLabel}</Button>
                </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageSection;