import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.scss';

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    margin: '0',
    minHeight: '100vh',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
