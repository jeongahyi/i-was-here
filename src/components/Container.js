import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapWrapper from './MapWrapper';
import Search from './Search';
import mapInfo from '../data/mapInfo.json';
import List from './List';

const useStyles = makeStyles(() => ({
  root: {
    height: '700px',
    overflow: 'scroll',
    bottom: '0',
  },
}));

const info = mapInfo;

const Container = ({ value }) => {
  const classes = useStyles();

  const countryCodes = ["392", "410", "348", "040", "752", "356", "840", "156"]
  const [filterCodes, setFilterCodes] = useState(countryCodes);
  const keywords = ["study", "work", "travel", "one day trip"];
  const [filterKeywords, setFilterKeywords] = useState(keywords);
  const [years, setYears] = useState([2010,2021]);

  const handelCountryCodes = () => {
    console.info(filterKeywords, years);
    // year 392, 410, 348, 040, 752, 356, 840, 156
    // keyword study work travel one day trip 
    // work 392(japan), 840[United States of America]
    const [ min, max ] = years;
    const newCodes = Object.keys(info).filter(code => {
      const hasYear = info[code].year.some((value) => (min <= value && max >= value));
      const hasKeyword = info[code].keyword.some(value => filterKeywords.includes(value));
      console.info(filterKeywords, hasKeyword);
      return hasKeyword && hasYear;
    });
    console.log(newCodes)
    setFilterCodes(newCodes);
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
      />
      {value && value === "Map" ?
        <MapWrapper
          mapInfo={mapInfo}
          filterCodes={filterCodes}
        /> :
        <List
          mapInfo={mapInfo}
          filterCodes={filterCodes}
        />
      }
    </main>
  )
}

export default Container;