import React from 'react';
import Adriana from './adriana';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Setting from './setting';
import {BrowserRouter as Router, Route ,Switch, useHistory} from 'react-router-dom'




function App() {


  return (

    <Router>
 <div className="App">
  <Navbar/>


         <Route  path="/home" component={Home} /> 
        
         <Route  path="/adriana" component={Adriana} /> 
         <Route  path="/setting" component={Setting} /> 





    </div>
    </Router>
  );
}

export default App;
