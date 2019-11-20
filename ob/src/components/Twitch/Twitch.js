import React, {Component} from 'react';
import './Twitch.css';

import Status from './../Status/Status';

import axios from 'axios';
import './Twitch.css';
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
            let membersData = values.map(e => (e.data.data.length == []) ? 'offline' : e.data.data);
            let membersArray = members;
            for (let i = 0; i < membersArray.length; i++){
                membersArray[i].status = membersData[i];
            };
            this.setState({membersInfo: membersArray});
        });
    };


    componentDidMount(){
        this.getMembersInfo();
    }

    render(){
        let onlineMembers = this.state.membersInfo.filter(e => e.status !== 'offline')
        return (
            <div>

                <div className='twitch__container'>
                    <div className='twitch__header'>
                        <h2>Who's online?</h2>
                    </div>
                    <div className='twitch__main'>
                        {
                            (onlineMembers.length !== 0) 
                            ?   <div>
                                    {onlineMembers.map((e, i) => <Status key={i} member={e}/> )} 
                                </div>
                            :   <div>
                                    <h3>None of our members are online!</h3>
                                    <p>Please check back later.</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Twitch;