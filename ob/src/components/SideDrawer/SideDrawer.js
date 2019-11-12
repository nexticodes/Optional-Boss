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
                <li><Link onClick={props.close} to='/'>Home</Link></li>
                <li><hr/></li>
                <li><Link onClick={props.close} to='/members'>Members</Link></li>
                <li><hr/></li>
                <li><Link onClick={props.close} to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    );
}
  

export default SideDrawer;