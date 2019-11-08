import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Header.css';

import {Link} from 'react-router-dom';

import logo from '../../assets/OB logo.jpg'

const Header = props => (
    <div className='header'>
        <nav className='header__navigation'>
            <div className='header__logo'>
                <a href='/'><img src={logo} alt="Optional Boss Logo" height="50px" width="50px"/><span className='logo-name'>Optional Boss</span></a>
            </div>
            <div className='spacer'></div>
            <div className='header__toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='header_navigation-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/members'>Members</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Header;