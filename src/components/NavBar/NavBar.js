import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navigation">
      <div className="navigation-menu">
        <a href="projects" className="item">Projects</a>
        <a href="about" className="item">About</a>
        <a href="contact" className="item">Contact</a>
      </div>
    </div>
  )
}

export default NavBar;