import React, {Component} from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Members from './components/Members/Members';
import Contact from './components/Contact/Contact';



class App extends Component {
  state = {
    sideDrawerOpen: false,
    membersInfo: []
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
        <BrowserRouter>
          <Header drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} close={this.backdropClickHandler}/>
          {backdrop}
          <Switch>
            <Route exact path='/' render={(props) => <Home/>}></Route>
            <Route path='/members' render={(props) => <Members/>}></Route>
            <Route path='/contact' render={(props) => <Contact/>}></Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
