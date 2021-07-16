import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Tabs, Tab, Avatar } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles(() => ({
  header: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 8px 8px -8px',
    // transition: 'box-shadow 300ms ease-in-out 0s',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "0.875rem",
    fontWeight: "500",
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  icon: {
    padding: '6px 12px',
    color: '#ff0d85',
    fontSize: '2.5em',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <ExploreIcon className={classes.icon} />
        <p>Color my world</p>
      </div>
      {/* <Tabs>
        <Tab label="Color my world"/>
        
        <Tab label="Log my journey" />
      </Tabs> */}
    </header>
  )
}

export default Header;