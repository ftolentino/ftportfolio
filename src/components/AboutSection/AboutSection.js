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
                <p>Hello, I'm Filmer! I am a self-taught Frontend Developer. My career started out in games as an artist, 
                  making 3D environments for players to explore. After some time, I wanted to learn something different and
                  found interest in the idea of programming to train the other side of my brain. It began as a journey to develop my logical 
                  problem solving skills, not just in coding, but in life itself. I find satisfaction in creativity,
                  learning new things, and expanding my skill sets. One of the highlighted traits about me, is 
                  collaborating with others and cross pollinating ideas! 
                </p>
                <br/>
                <h3>Things of interest</h3>
                <p>Things that interest me are soccer, music, and video games. Each hobby involves a bit of creativity, problem solving skills, and team work.
                  <br/>
                  <br/>
                  I'm an avid soccer enthusiast. I've been following the English Premier League since 2001 and have been playing on teams since gradeschool. 
                  Every weekend I look forward to watching soccer games in the mornings, often times on multiple screens to watch different teams at once. 
                  It truly is "The Beautiful Game" to me, from the team work, to individual skill, and the chaos of the ball physics!
                  <br/>
                  <br/>
                  I'm a self-taught guitar/bass player and have been playing in bands for 15 years. It's something that
                  I enjoy doing for fun and as a way to creatively express myself. Making music with friends has been a great creative space
                  to communicate through instruments and collectively write songs together.
                  <br/>
                  <br/>
                  Gaming has been a part of me since I was a kid, from Oregon Trail, to consoles, to PC gaming. I like to absorb interactive 
                  graphics and explore gameplay. I typically play multiplayer games because I enjoy the team aspect of working together towards a shared goal.
                  <br/>
                  <br/>
                  Last but not least, I'm a dog dad of two Alaskan Klee Kai. They're my every day companions, my buddies.
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