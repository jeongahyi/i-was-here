import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapWrapper from './MapWrapper';
import Search from './Search';

const useStyles = makeStyles(() => ({
  root: {
    bottom: '0',
  },
}));

const Main = () => {
  const classes = useStyles();

  // Search states
  const [countryCodes, setCountryCodes] = useState(['410','392','840']);
  const [country, setCountry] = useState('United States of America');
  const [year, setYear] = useState(2013);

  return (
    <main className={classes.root}>
      <Search
        setYear={setYear}
        setCountryCodes={setCountryCodes}
        setCountry={setCountry}
      />
      <MapWrapper
        countryCodes={countryCodes}
        country={country}
        year={year}
      />
    </main>
  )
}

export default Main;