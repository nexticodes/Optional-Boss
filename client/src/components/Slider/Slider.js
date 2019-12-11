import React, {useState, useEffect} from 'react';

import './Slider.css';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = props => {

    const [currIndex, setCurrIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    let goPrevSlide = () => {
        clearTimeout()
        if (currIndex <= 0) {
            setCurrIndex(images.length - 1);
            setTranslateValue(-(slideWidth() * (images.length - 1)));
        } else {
            setCurrIndex(currIndex - 1);
            setTranslateValue(translateValue + (slideWidth()));
        }

    }

    let goNextSlide = () => {
        clearTimeout()
        if (currIndex >= images.length - 1) {
            setCurrIndex(0);
            setTranslateValue(0);
        } else {
            setCurrIndex(currIndex + 1);
            setTranslateValue(translateValue + -(slideWidth()));
        }
    }

    let slideWidth = () => (document.querySelector('.slide')) ? document.querySelector('.slide').clientWidth : window.innerWidth 

    const images = [
        'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573064556/OBfam.jpg',
        `https://res.cloudinary.com/nexticus-cloud/image/upload/v1573067027/OBtrio.jpg`,
        'https://res.cloudinary.com/nexticus-cloud/image/upload/v1573064556/OBepic.jpg'
    ];

    useEffect(() => {
        let timer = setTimeout(() => goNextSlide(), 3000);
        return () => {
            clearTimeout(timer);
        }
    });

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
                <div className='spacer'>{currIndex + 1} / {images.length}</div>
                <RightArrow nextSlide={goNextSlide}/>
            </div>
        </div>
    );
}

export default Slider;