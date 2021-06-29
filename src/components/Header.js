import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 8px 8px -8px',
    transition: 'box-shadow 300ms ease-in-out 0s',
  },
  icon: {
    color: 'pink',
    fontSize: '2.5em',
    padding: '6px 12px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Tabs>
        <Tab label="Time Travel"/>
        <ExploreIcon className={classes.icon} />
        <Tab label="World Travel" />
      </Tabs>
    </header>
  )
}

export default Header;