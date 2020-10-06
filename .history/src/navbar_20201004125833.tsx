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
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
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
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    );
  }
  export default Navbar;