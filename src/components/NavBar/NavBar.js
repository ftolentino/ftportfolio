import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navigation">
          <div className="navigation-menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/Projects" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>
    );
}

export default Navbar;