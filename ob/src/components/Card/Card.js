import React from 'react';

import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                {props.member.username}
            </div>
            <div className='card-image'>
                
            </div>
            <div className='card-body'>
                
            </div>
        </div>
    )
};

export default Card;