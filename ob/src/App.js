import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    // always close sidedrawer
    this.setState({sideDrawerOpen: false});
  };

  render(){

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <Header drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Router>j
          <Route exact path='/' render={(props) => <Home/>}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
