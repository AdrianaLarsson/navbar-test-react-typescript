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


function HomeButton() {
  let history = useHistory();
}
function handleClick() {
  history.push("/home");
}

function App() {
  return (
    <div className="App">
      
  
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
