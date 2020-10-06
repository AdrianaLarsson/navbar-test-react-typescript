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
        value={state}
        variant={"fullWidth"}
        indicatorColor="primary" 
      
        textColor="primary"
        centered
      >
        <Tab  label={<Typography variant={ state === 0 ? "inherit" : "body1"}>Långtidsplanering</Typography>} />
        <Tab label={<Typography variant={state === 1 ? "inherit" : "body1"}>Korttidsplanering</Typography>}/>
 
      </Tabs>
    </Box>

    </div>
  );
}

export default Navbar;