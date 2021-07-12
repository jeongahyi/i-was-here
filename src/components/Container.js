import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapWrapper from './MapWrapper';
import Search from './Search';
import mapInfo from '../data/mapInfo.json';

const useStyles = makeStyles(() => ({
  root: {
    bottom: '0',
  },
}));

const Container = () => {
  const classes = useStyles();

  // Search states
  const [countryCodes, setCountryCodes] = useState(['410','392','840']);
  const [country, setCountry] = useState('United States of America');
  const [year, setYear] = useState(2013);

  return (
    <main className={classes.root}>
      <Search
        country={country}
        year={year}
        setYear={setYear}
        setCountryCodes={setCountryCodes}
        setCountry={setCountry}
      />
      <MapWrapper
        mapInfo={mapInfo}
        countryCodes={countryCodes}
      />
    </main>
  )
}

export default Container;