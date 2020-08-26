import React from 'react';

import './Header.css';

function Header(props) {

    return (
        <header className="header d-none d-sm-flex">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </h1>
            <p className="lead text-muted"><br/><br/>{props.subtitle}</p>
        </header>
    );
}

export default Header;