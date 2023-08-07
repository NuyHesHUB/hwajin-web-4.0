import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import React from 'react';

function App() {

  return (
    <div className="app-wrap bg-slate-400">
                <Home/>
                <About/>
                <Service/>
    </div>
  );
}

export default App;
