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
                  problem solving skills, not just in coding, but in life itself. I find satisfaction in creativity and 
                  constantly learning. One of the highlighted traits about me, is collaborating with others and cross pollinating ideas! 
                  I love to find great team work, and be involved.
                </p>
                <br/>
                <h3>Things of interest</h3>
                <p>Three things that interest me are soccer, music, and video games. 
                  <br/>
                  <br/>
                  I've been following the English Premier League since 2001 and have been playing on teams since I was in the 2nd grade. 
                  Every weekend I look forward to watching Premier League games in the mornings, often times multiple screens to watch multiple games. It 
                  truly is The Beautiful Game to me, from team work, individual skill, to the chaos of the ball physics!
                  <br/>
                  <br/>
                  I'm also a self-taught guitar/bass player and have been playing in bands with friends for 15 years. It's something 
                  I love doing for fun, and as an expression. I like to write and sing songs, playing music is my church.
                  <br/>
                  <br/>
                  Gaming has also been a part of me since I was a kid, from Oregon Trail, consoles, to PC gaming. I love to absorb interactive 
                  graphics and explore gameplay. I mostly like to play online with friends, much like how I enjoy playing on teams in soccer.
                  Though I do of course enjoy single player campaign experiences as a gamer.
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