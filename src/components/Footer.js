import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto',
    bottom: 0,
    padding: '35px',
    position: 'relative',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
    borderTopWidth: '1px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <span>
        Built by&nbsp;
      <a href={'https://github.com/jeongahyi'}>Jeongah Y.</a>
      </span>
    </footer>
  )
}

export default Footer;