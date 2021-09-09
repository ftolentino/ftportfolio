import React from 'react';
import './AboutSection.css';

const AboutSection = ({ headline, shadow, img, alt}) => {
  return (
    <>
      <div className='home__hero-section darkBg'>
        <div className="container">
          <div className="row home__hero-row">
            <div className='col'>
              <div className='home__hero-text-wrapper'>
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

export default AboutSection;