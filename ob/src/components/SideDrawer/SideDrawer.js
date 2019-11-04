import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => (
    <nav>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Members</a></li>
            <li><a href='/'>Contact Us</a></li>
        </ul>
    </nav>
);

export default SideDrawer;