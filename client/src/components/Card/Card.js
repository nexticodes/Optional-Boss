import React from 'react';

import './Card.css'

import ig from '../../assets/Instagram-Logo-COLORED.png';
import tw from '../../assets/Twitter-Logo-COLORED.png';
import ttv from '../../assets/Twitch-Logo-COLORED.png';

const Card = (props) => {
    const [cardStatus, setCardStatus] = React.useState(false);

    let cardFlip = () => {
        setCardStatus(!cardStatus);
    }

    const styles = {
        backgroundImage: `url(${props.member.img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: '-1000'
    }

    const cardStyle = {
        width: '100%',
        height: '100%',
        position: 'relative',
        transition: 'transform 1s',
        transformStyle: 'preserve-3d',
        zIndex: '-1000'
    }

    const flipStyle = {...cardStyle,
        transform: 'rotateY(180deg)',
    }

    let classToggle = (!cardStatus) ? cardStyle : flipStyle

    return (
        <div className="scene">
            <div style={classToggle}>
                <div onClick={cardFlip} className="card__face card__face--front" style={styles}></div>
                <div className="card__face card__face--back">
                    <div className='card-header'>
                        <p className='tag'>Twitch Username</p>
                        {props.member.username}
                    </div>
                    <div className='card-body'>
                        <p className='tag'>Likes</p>
                        <textarea readOnly value={props.member.likes}></textarea>
                    </div>
                    <p className='tag'>Social Media</p>
                    <div className='card-social'>
                        <a href={props.member.ig} rel="noopener noreferrer" target="_blank"><img src={ig} alt='ig link'/></a>
                        <a href={props.member.twitter} rel="noopener noreferrer" target="_blank"><img src={tw} alt='twitter link'/></a>
                        <a href={props.member.twitch} rel="noopener noreferrer" target="_blank"><img src={ttv} alt='twitch link'/></a>
                    </div>
                    <button onClick={cardFlip}>Flip back</button>
                </div>
            </div>
        </div>
    )
};

export default Card;