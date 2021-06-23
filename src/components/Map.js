import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Geo from './Geo';
import SlideDialog from './SlideDialog';

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: '10px',
  },
}));

const Map = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [country, setCountry] = useState('South Korea');
  const [info, setInfo] = useState({});
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
    <main className={classes.main}>
      <div className={classes.title}>
        <LocationOnIcon />
        <Typography>I was in {country}</Typography>
      </div>
      <Geo
        width={width}
        height={height}
        setOpen={setOpen}
        setCountry={setCountry}
        setInfo={setInfo}
      />
      <SlideDialog
        open={open}
        info={info}
        handleClose={handleDrawerClose}
      />
    </main>
  )
}

export default Map;