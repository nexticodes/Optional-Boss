import React from 'react';

import {members} from '../../members';

import Card from '../Card/Card';
import { whileStatement } from '@babel/types';

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
            <main style={{marginTop: '70px', marginBottom: '74px'}}>
                <h1>MEMBERS</h1>
                <hr/>
                <div style={cardStyle}>Click on the cards for more info!</div>
                <hr/>
                {members.map((e, i) => <Card key={i} member={e}/>)}
            </main>
        </div>
    );
};

export default Members;