import React from 'react';
import '../App/App.css';

import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div>
      <div className='App'>
        <NavBar />
        <h1>FILMER TOLENTINO</h1>
        <Projects />
      </div>
    </div>
  );
}

export default App;
