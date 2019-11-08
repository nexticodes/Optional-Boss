import React, {Component} from 'react';
import {BrowserRouter, Switch , Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Members from './components/Members/Members';

import axios from 'axios';

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

  apiCall = () => {
    const response = axios.get('https://api.twitch.tv/helix/streams?user_login=Nexticus', {
      headers:
        {
          'Content-Type': 'application/json',
          'Client-ID': 'bsmusanbzprjf19r25tet37rk3pe84'
        }
    })
    response.then((e) => console.log(e.data));
  }

  componentDidMount(){
    this.apiCall();
  }

  render(){

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
          <Header drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path='/' render={(props) => <Home/>}></Route>
            <Route path='/members' render={(props) => <Members/>}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
