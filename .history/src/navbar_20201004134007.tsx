import React from 'react';
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import './App.css';

import {
    Redirect,
    Route,
    Switch,
    useHistory,
    BrowserRouter as Router,
  } from "react-router-dom";
import Adriana from './adriana';
import Home from './home';
import Setting from './setting';
  


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  function Navbar() {

const pages = [
    {id: 0, path:'/home'},
    {id: 1, path:'/adriana'},
    {id: 2, path:'/setting'}
]


const history = useHistory()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      const page = pages.filter(p=>p.id === newValue)[0]
     history.push(page.path)
    

    };
  
    return (
      <Box className={classes.root}>
           <Router>
      <Switch>
         <Route  path="/home" component={Home} /> 
         <Route  path="/adriana" component={Adriana} /> 
         <Route  path="/setting" component={Setting} /> 

         </Switch>
        </Router>
        <Tabs
        variant={'fullWidth'}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
             <Tab  label={<Typography>Home</Typography>} />
          <Tab  label={<Typography>Adriana</Typography>} />
          <Tab  label={<Typography>Setting</Typography>} />
        </Tabs>
      </Box>
    );
  }
  export default Navbar;