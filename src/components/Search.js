import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
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
}));

const Search = ({ setCountryCodes, setCountry, setYear }) => {
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
    </div>
  )
}

export default Search;