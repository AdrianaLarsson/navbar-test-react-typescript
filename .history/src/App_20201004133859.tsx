import React from 'react';
import Adriana from './adriana';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Setting from './setting';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      
      <Navbar/>
     
     <h1>App </h1>

    </div>
  );
}

export default App;
