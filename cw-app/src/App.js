import React from 'react';
import logo from './RandI.jpeg';
import './App.css';
import HuluComponent from './HuluComponent';

function App() {
  let huluShow = {
    name : "Rizzoli and Isles",
    rating : 10,
    numberOfSeasons : 8,
    genre : "crime procedural",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          React Basics CW
        </p>
        <HuluComponent show = {huluShow}></HuluComponent>
      </header>
    </div>
  );
}

export default App;
