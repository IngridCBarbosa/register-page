import React, { Fragment } from 'react'

import Header from '../Header';

import './styles.css';

function Main() {
    return(
        <Fragment>
            <Header>
                <main className="content">
                    Conteúdo
                </main>
            </Header>
        </Fragment>
    );
}

export default Main;