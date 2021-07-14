import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { 
  Badge,
  Slider,
  Chip,
  Typography
} from '@material-ui/core';
import TimeTracker from './TimeTracker';
import SearchChip from './SearchChip';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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

const Search = ({
  setYears,
  years,
  keywords,
  filterKeywords,
  setFilterKeywords,
  handelCountryCodes
}) => {
  const classes = useStyles();

  // keyword
  const handleKeywords = (label) => {
    console.info("handleKeywords", label);
    const isExisted = filterKeywords.some(keyword => keyword === label);
    if (isExisted) {
      const newFiltered = filterKeywords.filter(keyword => keyword !== label);
      setFilterKeywords(newFiltered);
    } else {
      setFilterKeywords([...filterKeywords, label]);
    }
    handelCountryCodes();
  }

  // year
  const handleChange = (event, newValue) => {
    console.info("handleChange", newValue);
    setYears(newValue);
    handelCountryCodes();
  };

  // clear
  const [color, setColor] = useState("primary");
  const [invisible, setInvisible] = useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  const handleClick = (event) => {
    handleBadgeVisibility();
    if (color === "primary") {
      setColor("");
      
    } else {
      setColor("primary");
    }
    console.info('click', event.target.label)
  }

  return (
    <div className={classes.search}>
      {/* Type : Study, Work, Travel, One day trip */}
      {keywords.map(keyword => (
        <SearchChip
          label={keyword}
          handleKeywords={handleKeywords}
        />
      ))}
      
      {/* Year : 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021 */}
      <div className={classes.chip}>
        <Slider
          value={years}
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

      {/* Clear Filters */}
      <div className={classes.chip} >
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <Chip
            label="Clear Filters"
            onClick={handleClick}
            color={color}
            variant={"outlined"}
          />
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
    </div>
  )
}

export default Search;