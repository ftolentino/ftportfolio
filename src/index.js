import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/ftportfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root')
);


