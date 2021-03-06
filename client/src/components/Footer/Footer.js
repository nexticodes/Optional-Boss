import React from 'react';

import './Footer.css';
import logo from '../../assets/OB logo.jpg';
import tw from '../../assets/Twitter-Logo-COLORED.png';
import ig from '../../assets/Instagram-Logo-COLORED.png';
import disc from '../../assets/Discord-Logo-COLORED.png';

const Footer = props => (
    <div className='footer'>
        <div className='footer__navigation'>
            <div className='footer__logo'>
                <img src={logo} alt="Optional Boss Logo" height="80px" width="80px"/><span className='footer__logo-name'>OB</span>
            </div>
            <div className='spacer'></div>
            <div className='footer__navigation-items'>
                <a href='http://www.twitter.com/tmoptionalboss' target='_blank' rel="noopener noreferrer"><img src={tw} alt="Twitter" height="40px" width="40px"/></a>
                <a href='http://www.instagram.com/tmoptionalboss' target='_blank' rel="noopener noreferrer"><img src={ig} alt="IG" height="40px" width="40px"/></a>
                <a href='https://discord.gg/qwEcRDj' target='_blank' rel="noopener noreferrer"><img src={disc} alt="Discord" height="40px" width="40px"/></a>
            </div>
            <div className='spacer'></div>
            <div className='footer__text'>
                <hr/>
                Copyright © 2019 OptionalBoss. All Rights Reserved.
            </div>
        </div>
    </div>
);

export default Footer;