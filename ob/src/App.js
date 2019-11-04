import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <Route exact path='/' render={(props) => <Home/>}></Route>
    </Router>
  );
}

export default App;
