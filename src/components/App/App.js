import React from 'react';
import { Switch, Route } from 'react-router';
import '../App/App.css';

import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import About from '../About/About';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
