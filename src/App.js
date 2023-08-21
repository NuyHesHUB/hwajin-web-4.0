import React from 'react';
/* Styled */
import './styled/App.css';
/* Components */
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Value from './Components/Value';
import Service from './Components/Service';
import AboutRobotos from './Components/AboutRobotos';
import NewPlatform from './Components/NewPlatform';
import Partner from './Components/Partner';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="app-wrap">
        <Header/>
        <Home/>
        <About/>
        <Value/>
        <Service/>
        <AboutRobotos/>
        <NewPlatform/>
        <Partner/>
        <Footer/>
    </div>
  );
}

export default App;
