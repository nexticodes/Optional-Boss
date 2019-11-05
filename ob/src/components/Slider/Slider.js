import React, {useState} from 'react';

import './Slider.css';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = props => {

    const [currIndex, setCurrIndex] = useState(0);

    const images = [
        'https://pbs.twimg.com/media/EF_8FwdU8AA_pTQ?format=jpg&name=400x400',
        'https://pbs.twimg.com/media/EFbjItiUEAALV9k?format=jpg&name=400x400'
    ]

    let goPrevSlide = () => {
    }

    let goNextSlide = () => {
    }

    return (
        <div className='slider'>
            <Slide/>

            <LeftArrow prevSlide={goPrevSlide}/>
            <RightArrow nextSlide={goNextSlide}/>
        </div>
    );
}

export default Slider;