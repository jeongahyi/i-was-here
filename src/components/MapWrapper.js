import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Map from './Map';

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

const MapWrapper = ({ countryCodes, country, year }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
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
      <Map
        width={width}
        height={height}
        countryCodes={countryCodes}
      />
    </>
  )
}

export default MapWrapper;