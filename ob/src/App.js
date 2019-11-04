import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' render={(props) => <div><h1>Hello!</h1></div>}></Route>
      </Router>
    </div>
  );
}

export default App;
