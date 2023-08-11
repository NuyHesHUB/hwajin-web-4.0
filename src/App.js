import './styled/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Value from './Components/Value';
import Service from './Components/Service';
import AboutRobotos from './Components/AboutRobotos';
import React from 'react';

function App() {

  return (
    <div className="app-wrap ">
        <Header/>
        <Home/>
        <About/>
        <Value/>
        <Service/>
        <AboutRobotos/>
        {/* <Value/> */}
    </div>
  );
}

export default App;
