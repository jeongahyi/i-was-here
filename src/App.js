import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Map from './components/Map';
import Images from './components/Images';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    minHeight: '100vh',
    paddingLeft: '80px',
    paddingRight: '80px',
  },
  main: {
    alignSelf: 'center',
  }
}));

const App = () => {
  const classes = useStyles();
  const [pictures, setPictures] = useState({});
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Map setPictures={setPictures} />
        <Images pictures={pictures} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
