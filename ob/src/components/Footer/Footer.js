import React from 'react';

import './Footer.css';
import logo from '../../assets/OB logo.jpg';
import tw from '../../assets/twitter.png';
import ig from '../../assets/instagram.png';
import disc from '../../assets/discord.png';

const Footer = props => (
    <div className='footer'>
        <div className='footer__navigation'>
            <div className='spacer'></div>
            <div className='footer__logo'>
                <img src={logo} alt="Optional Boss Logo" height="80px" width="80px"/><span className='footer__logo-name'>OB</span>
            </div>
            <div className='footer_navigation-items'>
                <a href='http://www.twitter.com/tmoptionalboss'><img src={tw} alt="Twitter" height="40px" width="40px"/></a>
                <a href='http://www.instagram.com/tmoptionalboss'><img src={ig} alt="IG" height="40px" width="40px"/></a>
                <a href='https://discord.gg/qwEcRDj'><img src={disc} alt="Discord" height="40px" width="40px"/></a>
            </div>
            <div className='footer__text'>
                <hr/>
                Copyright © 2019 OptionalBoss. All Rights Reserved.
            </div>
        </div>
    </div>
);

export default Footer;