import React from 'react';

import './Logo.css';

import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png';

function Logo(props){

    return(
        <aside className="logo">
            <Link to="" className="logo">
                <img src={logo} alt="logo"/>
            </Link>
        </aside>
    );
}

export default Logo;