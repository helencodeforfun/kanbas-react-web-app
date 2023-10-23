import React from 'react';
import './App.css';

import Kanbas from './Kanbas';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Route path='/' element={<Navigate to={"Kanbas"}/>}></Route>
      <Route path='Kanbas/*' Component={Kanbas}></Route>
    </Routes>
  );
}

export default App;
