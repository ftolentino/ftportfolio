import React from 'react';
import '../App/App.css';



import { Route, Link, BrowserRouter } from 'react-router-dom';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomePage from '../HomePage/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="navigation">
          <Route exact path="/"  />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <div className="navigation-menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/Projects" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>
        <HomePage />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
