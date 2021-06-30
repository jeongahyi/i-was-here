import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MapWrapper from './MapWrapper';

const useStyles = makeStyles(() => ({
  root: {
    alignSelf: 'center',
    marginTop: '30px',
    marginBottom: '100px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h5" gutterBottom>
          I was here
        </Typography>
        <Divider />
      </div>
      <MapWrapper />
    </main>
  )
}

export default Main;