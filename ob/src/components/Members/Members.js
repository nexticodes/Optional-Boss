import React from 'react';

import {members} from '../../members';

import Card from '../Card/Card';

const Members = (props) => {
    return (
        <div>
            <main style={{marginTop: '70px', marginBottom: '74px'}}>
                <h1>MEMBERS</h1>
                <hr/>
                {members.map(e => <h4>{<Card member={e}/>}</h4>)}
            </main>
        </div>
    );
};

export default Members;