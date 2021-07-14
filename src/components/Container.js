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

const info = mapInfo;

const Container = () => {
  const classes = useStyles();

  // Search states
  const [countryCodes, setCountryCodes] = useState(['410','392','840']);
  // const [country, setCountry] = useState('United States of America');
  const keywords = ["Study", "Work", "Travel", "One day trip"];
  const [filterKeywords, setFilterKeywords] = useState(keywords);
  const [years, setYears] = useState([2010,2021]);

  const handelCountryCodes = () => {
    console.info(filterKeywords, years);
    // year match
    // keyword match
    setCountryCodes(['410']);
  }

  return (
    <main className={classes.root}>
      <Search
        years={years}
        setYears={setYears}
        keywords={keywords}
        filterKeywords={filterKeywords}
        setFilterKeywords={setFilterKeywords}
        handelCountryCodes={handelCountryCodes}
        // country={country}
        // setCountryCodes={setCountryCodes}
        // setCountry={setCountry}
      />
      <MapWrapper
        mapInfo={mapInfo}
        countryCodes={countryCodes}
      />
    </main>
  )
}

export default Container;