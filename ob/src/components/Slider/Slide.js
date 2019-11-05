import React from 'react';

import './Slider.css';

const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    return (
        <div className="slide" style={styles}></div>
    );
}

export default Slide;