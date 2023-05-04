import React from 'react';
import './AboutSection.css';

const AboutSection = ({ headline, img, alt }) => {
  return (
    <>
      <div className='about_hero-section'>
        <div className="about-container">
          <div className="about-row about__hero-row">
            <div className='about-col'>
              <div className='about__hero-text-wrapper'>
                <h1 className='about-heading'>{headline}</h1>
                <p>I am a Full Stack Software Developer, with a focus on building user interfaces with React. I am currently proficient in Javascript and C# as my main programming langauges.
                  <br /> 
                  <br /> 
                  My background comes from game development as a 3D Environment Artist. After some time, I wanted to learn something different and found interest in the idea of programming to automate and build applications. I find satisfaction in creativity, learning new things, and expanding my skill sets remaining technology forward.
                </p>
                <br/>
                <h3>Things of interest</h3>
                  <br/>
                  I'm an avid soccer enthusiast. I love to follow the English Premier League and other European Football competitions. I have been playing on teams since gradeschool and currently play in a 6v6 small goal adult league.
                  <br/>
                  <p>
                  My main past time is playing guitar. I have a passion for creating music and playing in bands. 
                  </p>
              </div>
            </div>
            <div className='about-col'>
              <div className='about__hero-img-wrapper'>
                <img src={img} alt={alt} className='about__hero-img-shadow' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection;