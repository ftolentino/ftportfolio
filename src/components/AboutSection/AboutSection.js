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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce non libero laoreet, viverra metus in, dictum elit. 
                  Ut varius euismod velit et auctor. Nullam eget facilisis risus, 
                  ac fermentum mi. Phasellus efficitur bibendum nunc, 
                  eget consequat dolor finibus quis. Morbi hendrerit efficitur vestibulum. 
                  Curabitur nec blandit nibh. Phasellus eu sapien ut erat luctus rhoncus. 
                  Vivamus finibus ipsum et condimentum lobortis. Vestibulum at vehicula arcu. 
                  Sed mollis tincidunt erat a lacinia. Aliquam condimentum, tortor fringilla tempor posuere,
                  sapien quam sagittis ex, vel tempus nisl lacus quis elit.
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