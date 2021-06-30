import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Map from './Map';
import TimeTracker from './TimeTracker';

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: '20px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    background: 'linear-gradient(#fab49e, #de4d6a)',
    borderRadius: '10px',
    boxShadow: '0px 8px 8px -7px rgba(0, 0, 0, .4)',
  }
}));

const MapWrapper = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth*0.9);
  const [height, setHeight] = useState(window.innerWidth*0.45);

  const [countryCodes, setCountryCodes] = useState(['410','392','840']);
  const [country, setCountry] = useState('United States of America');
  const [year, setYear] = useState(2013);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth*0.9);
      setHeight(window.innerWidth*0.45);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []);

  return (
    <>
      <div className={classes.title}>
        <LocationOnIcon />
        <Typography>I was in {country}, {year}</Typography>
      </div>
      <div className={classes.wrapper}>
        <TimeTracker
          setYear={setYear}
          setCountryCodes={setCountryCodes}
          setCountry={setCountry}
        />
        <Map
          width={width}
          height={height}
          countryCodes={countryCodes}
        />
      </div>
    </>
  )
}

export default MapWrapper;