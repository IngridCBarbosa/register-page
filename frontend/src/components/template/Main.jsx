import React, { Fragment } from 'react';

import Header from './Header';

import './Main.css';

function Main(props) {

    return(
        <Fragment>
            <Header {...props}/>
            <main className="content">
                Conteúdo
            </main>
        </Fragment>
    );
}

export default Main;