import React from 'react';
import Adriana from './adriana';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Setting from './setting';




function App() {




  return (
 <div>
  
      <Router>
      <Switch>
         <Route  path="/home" component={Home} /> 
         <Route  path="/adriana" component={Adriana} /> 
         <Route  path="/setting" component={Setting} /> 

         </Switch>
        </Router>
     <h1>App </h1>

    </div>

  );
}

export default App;
