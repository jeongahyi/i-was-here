import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
import Images from './Images';
import Chips from './Chips';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',
    paddingBottom: '40px',
  }
}))

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Map />
      <Chips />
      <Images />
    </main>
  )
}

export default Main;