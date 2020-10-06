import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import "./App.css";
import { useHistory } from "react-router-dom";
;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Navbar() {
  const [state, setState] = useState<number>(0);
  const history = useHistory();

  const pages = [
    { id: 0, path: "/home" },
    { id: 1, path: "/adriana" },
    { id: 2, path: "/setting" },
  ];

  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Tabs
          value={state}
          variant={"fullWidth"}
          indicatorColor="primary"
          onChange={(_a, i) => {
            console.log(i);
            setState(i);
            const page = pages.filter((p) => p.id === i)[0];
        
            history.push(page.path);
          }}
          textColor="primary"
          centered
        >
          <Tab
            label={
              <Typography variant={state === 0 ? "inherit" : "body1"}>
                Home
              </Typography>
            }
          />
          <Tab
            label={
              <Typography variant={state === 2 ? "inherit" : "body1"}>
                Adriana
              </Typography>
            }
          />
          <Tab
            label={
              <Typography variant={state === 1 ? "inherit" : "body1"}>
                Setting
              </Typography>
            }
          />
        </Tabs>
      </Box>
    </div>
  );
}

export default Navbar;
