import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


