import React from 'react';

import './Card.css'

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
        cursor: 'pointer',
        zIndex: '-1000'
    }

    const flipStyle = {...cardStyle,
        transform: 'rotateY(180deg)',
    }

    let classToggle = (!cardStatus) ? cardStyle : flipStyle

    return (
        <div className="scene">
            <div onClick={cardFlip} style={classToggle}>
                <div className="card__face card__face--front" style={styles}></div>
                <div className="card__face card__face--back">
                    <div className='card-header'>
                        <p className='tag'>Twitch Username</p>
                        {props.member.username}
                    </div>
                    <div className='card-body'>
                        <p className='tag'>Likes</p>
                        <textarea readOnly value={props.member.likes}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;