import React from 'react';
import Adriana from './adriana';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Setting from './setting';
import {BrowserRouter as Router, Route ,Switch, useHistory} from 'react-router-dom'




function App() {


  return (
 <div>
  <Navbar/>
      <Router>

         <Route  path="/home" component={Home} /> 
        
         <Route  path="/adriana" component={Adriana} /> 
         <Route  path="/setting" component={Setting} /> 

        </Router>



    </div>

  );
}

export default App;
