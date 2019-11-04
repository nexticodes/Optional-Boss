import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Header.css';

const Header = props => (
    <header className='header'>
        <nav className='header__navigation'>
            <div>
                <DrawerToggleButton/>
            </div>
            <div className='header__logo'>OB</div>
            <div className='spacer'></div>
            <div className='header_navigation-items'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Members</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;