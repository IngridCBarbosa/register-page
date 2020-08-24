import React from 'react';

import './App.css';

import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';
import Main from '../components/template/Main';
import Navi from '../components/template/Navi';

function App(){
    return(
        <div className="app">
            <Logo/>
            <Navi/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;