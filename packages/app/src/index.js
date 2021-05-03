import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
