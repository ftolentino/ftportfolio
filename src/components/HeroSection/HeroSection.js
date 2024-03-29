import React from 'react';
import './HeroSection.css';
import { Button } from '../Button/Button';
// import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const HeroSection = ({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, shadow, img, alt, url}) => {
  return (
    <>
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className="container">
          <div className="row home__hero-row">
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                <ExternalLink href={url}>
                  <Button buttonSize='btn--medium' buttonColor='blue'>{buttonLabel}</Button>
                </ExternalLink>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className={shadow ? 'home__hero-img-shadow' : 'home__hero-img'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;