import React from 'react';

import Slider from '../Slider/Slider';
import About from '../About/About';

const Home = (props) => {
    return (
        <div>
            <main style={{marginTop: '37px', marginBottom: '74px'}}>
                <Slider/>
            </main>
            <About/>
        </div>
    )
}

export default Home;