import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { List, MapOutlined } from '@material-ui/icons';
import Header from './components/Header';
import Container from './components/Container';
// import Footer from './components/Footer';
import './styles/global.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.up('md')]: {
      margin: '0',
      minHeight: '100vh',
    },
    overflow: 'hidden',
  },

  bottomNav: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    bottom: 0,
    width: '100%',
    backgroundColor: "inherit",
  }
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState("Map");
  return (
    <div className={classes.root}>
      <Header />
      <Container value={value} />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction value="List" label="List" icon={<List />}/>
        <BottomNavigationAction value="Map" label="Map" icon={<MapOutlined />} />
      </BottomNavigation>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
