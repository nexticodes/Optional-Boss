import React, {Component} from 'react'

import './Twitter.css';

class Twitter extends Component {
    state = {
        tweets: [1,2,3,4,5],
    }

    // async getTweets(){
    //     await axios.get('https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tmoptionalboss&count=5', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Consumer-Key': 'NIDpz1bJi7dNnoHxbeMrEvuJE',
    //             'Access-Token': '2965037396-0OnFzefjuU8LzN5mc3XXlSDWI3e29nk22kJpLpK',
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then((res) => console.log(res));
    // }
    
    // componentDidMount(){
    //     this.getTweets();
    // }
    
    render(){
        let {tweets} = this.state;
        return (
            <div>
                <h1>Recent Tweets by OB</h1>
                {tweets.map((e, i) => 
                    <h2 key={i}>Hello</h2>
                )}
            </div>
        );
    }
}

export default Twitter;
