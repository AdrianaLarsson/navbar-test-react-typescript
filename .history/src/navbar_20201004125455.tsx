import React from 'react';
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import './App.css';



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

function Navbar() {
    const classes = useStyles();

    
  return (
    <div className="Navbar">
      
      <Box className={classes.root}>
      <Tabs
      
        variant={"fullWidth"}
        indicatorColor="primary" 
      
        textColor="primary"
        centered
      >
        <Tab  label={<Typography >Långtidsplanering</Typography>} />
        <Tab label={<Typography >Korttidsplanering</Typography>}/>
 
      </Tabs>
    </Box>

    </div>
  );
}

export default Navbar;