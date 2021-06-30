import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    minHeight: '100vh',
    backgroundColor: 'whitesmoke',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
