import React, { useState } from 'react';
import { TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MapWrapper from './MapWrapper';
import TimeTracker from './TimeTracker';

const useStyles = makeStyles(() => ({
  root: {
    bottom: '0',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
  },
  keyword: {
    margin: '10px',
    backgroundColor: 'white'
  }
}));

const Main = () => {
  const classes = useStyles();

  const [countryCodes, setCountryCodes] = useState(['410','392','840']);
  const [country, setCountry] = useState('United States of America');
  const [year, setYear] = useState(2013);

  return (
    <main className={classes.root}>
      <div className={classes.search}>
        <TextField
          id="search-keyword"
          label="Search"
          variant="outlined"
          size="small"
          placeholder="country, city, year..."
          className={classes.keyword}
        />
        <TimeTracker
          setYear={setYear}
          setCountryCodes={setCountryCodes}
          setCountry={setCountry}
        />
      </div>
      <Divider />
      <MapWrapper
        countryCodes={countryCodes}
        country={country}
        year={year}
      />
    </main>
  )
}

export default Main;