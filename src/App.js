import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import { Routes, Route,  Navigate } from 'react-router';
import PathParamters from './Labs/a3/PathParameters';


function App() {
  return (
 
    <HashRouter>
    <div>
      <Routes>

        {/* <Route path='/' element={<Navigate to="/Labs/"/>}/> */}
        <Route index element={ <Labs/>}/>
        <Route path='/hello' element={<HelloWorld/>}/>
        <Route path='/kanbas/*' element={<Kanbas/>}/>
        <Route path='/Labs/*' element={<Labs />}/>



      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;