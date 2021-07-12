import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { TextField, Select, MenuItem, InputLabel, FormControl, Typography } from '@material-ui/core';
import TimeTracker from './TimeTracker';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
  },
  keyword: {
    // margin: '10px',
    // backgroundColor: 'white'
  },
  year: {
    minWidth: 120,
    margin: '10px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: '20px',
    backgroundColor: 'white',
  },
}));

const Search = ({ setCountryCodes, setCountry, setYear, country, year }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <TextField
        id="search-keyword"
        label="Search"
        size="small"
        placeholder="country, city, year..."
        className={classes.keyword}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2013</MenuItem>
          <MenuItem value={20}>2014</MenuItem>
          <MenuItem value={30}>2015</MenuItem>
        </Select>
      </FormControl>
      <TimeTracker
        setYear={setYear}
        setCountryCodes={setCountryCodes}
        setCountry={setCountry}
      />
      <div className={classes.title}>
        <LocationOnIcon />
        <Typography>I was in {country}, {year}</Typography>
      </div>
    </div>
  )
}

export default Search;