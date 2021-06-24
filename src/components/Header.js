import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
    marginBottom: '30px',
  },
  nav: {
    // height: '100vw',
    // backgroundColor: 'pink',
    // position: 'fixed',
    // right: 0,
  },
  icon: {
    color: 'pink',
    fontSize: '3em',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <ExploreIcon className={classes.icon} />
      <nav className={classes.nav}>
        <Tabs>
          <Tab label="World Map"/>
          <Tab label="Pictures" />
        </Tabs>
      </nav>
    </header>
  )
}

export default Header;