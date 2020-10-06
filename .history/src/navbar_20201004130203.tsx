import React from 'react';
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import './App.css';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  function Navbar() {

const page = [
    {id: 0, path:'/home'},
    {id: 1, path:'/home'},
    {id: 2, path:'/home'}
]

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
             <Tab  label={<Typography>Home</Typography>} />
          <Tab  label={<Typography>Adriana</Typography>} />
          <Tab  label={<Typography>Setting</Typography>} />
        </Tabs>
      </Box>
    );
  }
  export default Navbar;