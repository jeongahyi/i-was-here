import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Geo from './Geo';
import SlideDialog from './SlideDialog';
import TimeTracker from './TimeTracker';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: '20px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'pink',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 8px 8px -8px',
  }
}));

const Map = ({ setPictures }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth*0.9);
  const [height, setHeight] = useState(window.innerWidth*0.45);
  const [country, setCountry] = useState('South Korea');
  const [info, setInfo] = useState({});

  const [year, setYear] = useState(2013);
  const [places, setPlaces] = useState(['410','156']);
  const handleSliderChange = (year ,countries) => {
    setYear(year);
    setPlaces(countries);
  }

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
      <div className={classes.wrapper}>
        <TimeTracker
          handleSliderChange={handleSliderChange}
        />
        <Geo
          width={width}
          height={height}
          places={places}
          setOpen={setOpen}
          setCountry={setCountry}
          setInfo={setInfo}
          setPictures={setPictures}
        />
      </div>
      {/* <SlideDialog
        open={open}
        info={info}
        handleClose={handleDrawerClose}
      /> */}
    </section>
  )
}

export default Map;