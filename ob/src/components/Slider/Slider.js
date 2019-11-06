import React, {useState} from 'react';

import './Slider.css';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = props => {

    const [currIndex, setCurrIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const images = [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg'
    ]

    let goPrevSlide = () => {
        if (currIndex <= 0) {
            setCurrIndex(images.length - 1);
            setTranslateValue(-(slideWidth() * (images.length - 1)));
        } else {
            setCurrIndex(currIndex - 1);
            setTranslateValue(translateValue + (slideWidth()));
        }

    }

    let goNextSlide = () => {
        if (currIndex >= images.length - 1) {
            setCurrIndex(0);
            setTranslateValue(0);
        } else {
            setCurrIndex(currIndex + 1);
            setTranslateValue(translateValue + -(slideWidth()));
        }
    }

    let slideWidth = () => document.querySelector('.slide').clientWidth

    return (
        <div className='slider'>
            <div className='slider-wrapper'
                style={{
                    transform: `translateX(${translateValue}px)`,
                    transition: `transform ease-out 0.45s`
                }}>            
                    {images.map((e, i) => <Slide key={i} image={e}/> )}
            </div>
            <div className='slider-arrows-wrapper'>
                <LeftArrow prevSlide={goPrevSlide}/>
                <div className='spacer'></div>
                <RightArrow nextSlide={goNextSlide}/>
            </div>
        </div>
    );
}

export default Slider;