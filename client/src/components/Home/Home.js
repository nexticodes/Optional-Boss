import React from 'react';

import Slider from '../Slider/Slider';
import About from '../About/About';
import Twitch from '../Twitch/Twitch';
import Twitter from '../Twitter/Twitter';

import './Home.css';

const Home = (props) => {
    return (
        <div>
            <main style={{marginTop: '37px', marginBottom: '74px'}}>
                <Slider/>
            </main>
            <About/>
            <div className='social-media-container'>
                <Twitch/>
                <Twitter/>
            </div>
        </div>
    )
}

export default Home;