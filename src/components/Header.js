import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles(() => ({
  header: {
    alignSelf: 'center',
    marginTop: '15px',
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
    </header>
  )
}

export default Header;