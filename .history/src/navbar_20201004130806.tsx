import React from 'react';
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import './App.css';
import { useHistory } from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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



    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      const page = pages.filter(p=>p.id === newValue)[0]
      
    

    };
  
    return (
      <Box className={classes.root}>
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