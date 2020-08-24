import React, { Fragment } from 'react';

import Header from './Header';

import './Main.css';

function Main(props) {

    return(
        <Fragment>
            <Header />
            <main className="content">
                Conteúdo
            </main>
        </Fragment>
    );
}

export default Main;