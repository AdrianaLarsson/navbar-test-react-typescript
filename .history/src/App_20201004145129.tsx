import React from 'react';
import Adriana from './adriana';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Setting from './setting';
import {BrowserRouter as Router, useHistory} from 'react-router-dom'



function App() {
   let history = useHistory();
const handleClick = ()=>{



}
  return (
    <div className="App">
        <button type="button" onClick={handleClick}>
      Go home
    </button>
  
      {/* <Router>
      <Switch>
         <Route  path="/home" component={Home} /> 
         <Route  path="/adriana" component={Adriana} /> 
         <Route  path="/setting" component={Setting} /> 

         </Switch>
        </Router> */}
     <h1>App </h1>

    </div>
  );
}

export default App;
