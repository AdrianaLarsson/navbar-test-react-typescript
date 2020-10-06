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





function app() {
  let history = useHistory();

  const redirect = () => {
    history.push('/your-path')
  }

  return (
    <div>
      <button onClick={redirect}>Redirect</button>
    </div>
  )
}