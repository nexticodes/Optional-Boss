import React from 'react';

import {members} from '../../members';

const Members = (props) => {
    return (
        <div>
            <main style={{marginTop: '70px', marginBottom: '74px'}}>
                <h1>MEMBERS</h1>
                <hr/>
                {members.map(e => <h4>{e.name}</h4>)}
            </main>
        </div>
    );
};

export default Members;