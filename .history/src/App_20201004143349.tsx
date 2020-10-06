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
  let dlskd = useHistory();

  const redirect = () => {
    dlskd.push('/your-path')
  }

  return (
    <div>
      <button onClick={redirect}>Redirect</button>
    </div>
  )
}

 export default App;