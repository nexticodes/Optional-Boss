import React, {Component} from 'react';
import './Twitch.css';

import Status from './../Status/Status';

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

        Promise.all(promiseArray).then((values) => {
            let memberData = values.map(e => e.data.data);
            let membersArray = members;
            for (let i = 0; i < membersArray.length; i++){
                membersArray[i].status = memberData[i];
            };
            this.setState({membersInfo: membersArray});
        });
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
                <div className='twitch__status-container'>
                    {this.state.membersInfo.map((e, i) => <Status key={i} member={e}/>)}
                </div>
            </div>
        ) 
    }

}

export default Twitch;