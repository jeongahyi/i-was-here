import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Geo from './Geo';
import SlideDialog from './SlideDialog';
// import Image from './Image';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    paddingTop: '40px',
    paddingBottom: '20px',
    color: 'lightcoral',
  },
}));

const Map = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth*0.9);
  const [height, setHeight] = useState(window.innerWidth*0.45);
  const [country, setCountry] = useState('South Korea');
  const [info, setInfo] = useState({});
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth*0.9);
      setHeight(window.innerWidth*0.45);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []);
  return (
    <section className={classes.root}>
      <div>
        <Typography variant="h5" gutterBottom>World Map</Typography>
        <Divider />
      </div>
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
    </section>
  )
}

export default Map;