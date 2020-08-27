import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';
import Navi from '../components/template/Navi';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Navi />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default App;