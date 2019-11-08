import React from 'react';

import {Link} from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (  
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><hr/></li>
                <li><Link to='/members'>Members</Link></li>
                <li><hr/></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    );
}
  

export default SideDrawer;