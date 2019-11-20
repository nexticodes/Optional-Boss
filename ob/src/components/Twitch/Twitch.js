import React, {Component} from 'react';
import './Twitch.css';

import members from './../../members';

class Twitch extends Component {
    state = {

    };

    render() {
        console.log(members);
        return(
            <div>
                <h1>Who's online?</h1>
                <hr/>
            </div>
        )
    }
}

export default Twitch;