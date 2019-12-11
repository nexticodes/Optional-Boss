import React, {Component} from 'react';
import axios from 'axios';

import './Twitter.css';

import logo from '../../assets/OB logo.jpg'

class Twitter extends Component {
    state = {
        tweets: [],
    }

    getTweets(){
        axios.get('http://localhost:5000/api/twitter/tweets')
                .then((res) => {
                    this.setState({tweets: res.data.data});
                })
                .catch(err => console.log(err));
    }

    getTime(tweetTime){
        let t = new Date(tweetTime);
        return t.toLocaleTimeString();
    }

    componentDidMount(){
        this.getTweets();
        setInterval(() => this.getTweets(), 30000);
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
                        <h2 style={{'marginBottom': '0px'}}>Recent Tweets By OB</h2>
                        <p style={{'color':'gray', 'marginTop': '0px'}}>Updates every 30 secs</p>
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
