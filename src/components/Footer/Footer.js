import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              FT
            </Link>
          </div>
          <small className='website-rights'>FILMER TOLENTINO © 2023</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href="https://www.facebook.com/filmer.tolentino"
              rel="noreferrer"
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href="https://www.instagram.com/filmerraw/"
              rel="noreferrer"
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href="https://twitter.com/filmerTolentino"
              rel="noreferrer"
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              href="https://www.linkedin.com/in/ftolentino/"
              rel="noreferrer"
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a 
              className='social-icon-link'
              href="https://github.com/ftolentino" 
              rel="noreferrer" 
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;