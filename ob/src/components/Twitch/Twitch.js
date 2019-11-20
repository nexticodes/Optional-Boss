import React, {Component} from 'react';
import './Twitch.css';

import axios from 'axios';
import {members} from './../../members';


class Twitch extends Component {
    state= {
        isLoading: true,
        membersInfo: []
    }
    
    async getMembersInfo(){
        let promiseArray = await members.map((e) => axios.get(`https://api.twitch.tv/helix/streams?user_login=${e.username}`, {
                headers: {
                'Content-Type': 'application/json',
                'Client-ID': 'bsmusanbzprjf19r25tet37rk3pe84'
                }
        }));
        Promise.all(promiseArray).then((values) => this.setState({membersInfo:  values.map(e => e.data.data)}));
    };


    componentDidMount(){
        this.getMembersInfo();
    }

    render(){
        return(
            <div>
                <h1>Who's online?</h1>
                <hr/>
                {console.log(this.state.membersInfo)}
            </div>
        ) 
    }

}

export default Twitch;