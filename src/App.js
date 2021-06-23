import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    minHeight: '100vh',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
