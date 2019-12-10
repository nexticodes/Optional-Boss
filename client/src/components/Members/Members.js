import React from 'react';

import {members} from '../../members';

import Card from '../Card/Card';

import './Members.css';

const Members = (props) => {
    const cardStyle = {
        height: '4vh',
        width: '60vw',
        margin: '15px auto',
        padding: '15px',
        textAlign: 'center',
        background: 'black',
        textShadow: '0px 10px 10px white',
        fontSize: '2.5vh',
        color: 'white',
        border: '2px dotted white'
    }

    return (
        <div>
            <main style={{marginTop: '56px', marginBottom: '74px'}}>
                <div className='image-container' style={{backgroundImage: `url(https://res.cloudinary.com/nexticus-cloud/image/upload/o_60/v1573064556/OBfam.jpg)`,
                backgroundPosition: `50% 47.5%`,
            }}><h1 className='contact--header'>MEMBERS</h1></div>

                <hr/>
                <div style={cardStyle}>Click on the cards for more info!</div>
                <hr/>
                <div className='card-container'>
                {members.map((e, i) => <Card key={i} member={e}/>)}
                </div>
            </main>
        </div>
    );
};

export default Members;