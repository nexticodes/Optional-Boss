import React from 'react';

import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <p className='tag'>Twitch Username</p>
                {props.member.username}
            </div>
            <div className='card-subtitle'>
                <p className='tag'>Name</p>
                {props.member.name}
            </div>
            <div className='card-image'>
                
            </div>
            <div className='card-body'>
                <p className='tag'>Likes</p>
                <textarea>{props.member.likes}</textarea>
            </div>
        </div>
    )
};

export default Card;