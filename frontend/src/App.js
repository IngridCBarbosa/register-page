import React from 'react';

import './App.css';

import Logo from '../src/components/template/Logo'
import Main from '../src/components/template/Main'
import Footer from '../src/components/template/Footer'
import Navigation from '../src/components/template/Navigation'


function App() {
  return (
    <div>
      <Logo />
      <Main />
      <Navigation />
      <Footer />

    </div >
  );
}

export default App;
