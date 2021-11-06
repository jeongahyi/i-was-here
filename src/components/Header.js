import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Tabs, Tab, Avatar } from '@material-ui/core';
import { Explore, Person } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "rgb(0 0 0 / 10%) 0px 8px 8px -8px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "0.875rem",
    fontWeight: "500",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
  icon: {
    padding: "6px 12px",
    fontSize: "2.5em",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Explore className={classes.icon} color="secondary" />
        <p>Color my world</p>
      </div>
      {/* <Tabs>
        <Tab label="Color my world"/>
        
        <Tab label="Log my journey" />
      </Tabs> */}
      <div>
        <Person className={classes.icon} color="primary" />
      </div>
    </header>
  );
};

export default Header;
