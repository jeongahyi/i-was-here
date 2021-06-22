import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

import Geo from './components/Geo';
import SlideDialog from './components/SlideDialog';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   // content: {
//   //   flexGrow: 1,
//   //   padding: theme.spacing(3),
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen,
//   //   }),
//   //   marginRight: '50%',
//   //   display: 'contents'
//   // },
//   // contentShift: {
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.easeInOut,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   //   marginRight: 0,
//   // },
//   // contentRight: {
//   //   transtion: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen
//   //   }),
//   //   marginRight: 0,
//   // },
//   drawer: {
//     width: '50%',
//     flexShrink: 0,
//   },
//   drawerPaper: {
//       width: '50%',
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   },
// }));

const App = () => {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [country, setCountry] = useState('South Korea');
  const [info, setInfo] = useState({});
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []);

  return (
    <div className="app">
      <header><Typography>I was in {country}</Typography></header>
      <main>
        <Geo width={width} height={height} setOpen={setOpen} setCountry={setCountry} setInfo={setInfo} />
      </main>
      {/* <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open}
          classes={{paper: classes.drawerPaper,}} >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon/>
            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon />}
          </IconButton>
          <p>{country}</p>
        </div>
        <MyGridList images={images}/>
      </Drawer> */}
      <SlideDialog open={open} info={info} handleClose={handleDrawerClose}/>
      <footer><p>footer</p></footer>
    </div>
  );
}

export default App;
