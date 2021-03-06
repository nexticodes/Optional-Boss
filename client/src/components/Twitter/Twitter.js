import React, {Component} from 'react';
import axios from 'axios';

import './Twitter.css';

import logo from '../../assets/OB logo.jpg'
import tw from '../../assets/Twitter-Logo-COLORED.png'

class Twitter extends Component {
    state = {
        tweets: [],
    }

    getTweets(){
        axios.get('https://optional-boss.herokuapp.com/api/twitter/tweets')
                .then((res) => {
                    this.setState({tweets: res.data.data});
                })
                .catch(err => console.log(err));
    }

    runRetweetBot(){
        axios.get('https://optional-boss.herokuapp.com/api/bot/retweet')
        .then((res) => {
            console.log('Retweet Bot Called')
        })
        .catch(err => console.log('Something happened'));
    }

    getTime(tweetTime){
        let t = new Date(tweetTime);
        return t.toLocaleTimeString();
    }

    componentDidMount(){
        this.getTweets();
        this.runRetweetBot();
        setInterval(this.getTweets(), 15000);
        setInterval(this.runRetweetBot(), 20000);
    };

    componentWillUnmount(){
        clearInterval();
    }
    
    render(){
        let {tweets} = this.state;
        return (
            <div>
                <div className='twitter__container'>
                    <div className='twitter__header'>
                        <img src={tw} alt='Twitter Logo'/>
                        <div>
                            <h2 style={{'marginBottom': '0px'}}>Recent Tweets</h2>
                            <p style={{'color':'gray', 'marginTop': '0px', 'fontSize': '12px'}}>Updates every 30 secs</p>
                        </div>
                    </div>
                    <div className='twitter__main'>
                        {tweets.map((e, i) => 
                            <div key={i} className='twitter__tweet'>
                                <img src={logo} height='30px' width='30px'alt='OB LOGO'/><h4><a href='http://twitter.com/tmoptionalboss' target='_blank' rel="noopener noreferrer">@tmoptionalboss</a></h4>
                                <p>{e.text}</p>
                        <p style={{'color':'gray'}}>Created {this.getTime(e.created_at)}</p>
                                {i !== tweets.length - 1 ? <hr className='hr'/> : ''}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Twitter;
