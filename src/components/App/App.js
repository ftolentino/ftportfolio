import React from 'react';
import { Switch, Route } from 'react-router';
import '../App/App.css';

import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
