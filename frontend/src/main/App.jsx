import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';
import Main from '../components/template/Main';
import Navi from '../components/template/Navi';

function App(){
    return(
        <div className="app">
            <Logo/>
            <Navi/>
            <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React"/>
            <Footer/>
        </div>
    );
}

export default App;