import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { 
  Badge,
  Slider,
  Chip,
  Typography
} from '@material-ui/core';
import TimeTracker from './TimeTracker';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '20px',
    backgroundColor: 'white'
  },
  slider: {
    width: '300px',
  },
  chip: {
    margin: '10px'
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

const valuetext = (value) => {
  return `${value}°C`;
}

const Search = ({ setCountryCodes, setCountry, setYear, country, year }) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('click')
  }
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const [value, setValue] = React.useState([2010, 2021]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.search}>
      {/* Type : Study, Work, Travel, One day trip */}
      <Chip
        label="Study"
        onClick={handleClick}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        label="Work"
        onClick={handleClick}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        label="Travel"
        onClick={handleClick}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        label="One day trip"
        onClick={handleClick}
        className={classes.chip}
        color="secondary"
      />
      {/* Year : 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021 */}
      <div className={classes.chip} >
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          step={1}
          min={2010}
          max={2021}
          className={classes.slider}
        />
      </div>
      <div className={classes.chip} >
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <Chip label="Clear Filters" onClick={handleClick} />
        </Badge>
      </div>
      {/* <TimeTracker
        setYear={setYear}
        setCountryCodes={setCountryCodes}
        setCountry={setCountry}
      />
      <div className={classes.title}>
        <LocationOnIcon />
        <Typography>I was in {country}, {year}</Typography>
      </div> */}
      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>
            <Chip label="Work" onClick={handleClick} className={classes.chip} />
          </MenuItem>
          <MenuItem value={20}>
            <Chip label="Study" onClick={handleClick} className={classes.chip} />
          </MenuItem>
          <MenuItem value={30}>
            <Chip label="Travel" onClick={handleClick} className={classes.chip} />
          </MenuItem>
        </Select>
      </FormControl> */}
      {/* <TextField
        id="search-keyword"
        label="Search"
        size="small"
        placeholder="country, city, year..."
        className={classes.keyword}
      /> */}
      {/* <FormControl className={classes.formControl}>
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
      </FormControl> */}
    </div>
  )
}

export default Search;