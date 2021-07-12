import React from 'react';
import { Typography, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
  },
  slider: {
    width: '500px',
    color: '#242426',
  }
}));

const marks = [
  {
    value: 1,
    label: "2010",
    countryCodes: ["410", "156"],
    country: "China"
  },
  {
    value: 2,
    label: "2013",
    countryCodes: ["410", "392", "840"],
    country: "United States of America"
  },
  {
    value: 3,
    label: "2014",
    countryCodes: ["840"],
    country: "United States of America"
  },
  {
    value: 4,
    label: "2015",
    countryCodes: ["840", "410"],
    country: "South Korea"
  },
  {
    value: 5,
    label: "2016",
    countryCodes: ["410", "392", "356"],
    country: "Japan"
  },
  {
    value: 6,
    label: "2017",
    countryCodes: ["392", "410"],
    country: "Japan"
  },
  {
    value: 7,
    label: "2018",
    countryCodes: ["392", "410", "752"],
    country: "Sweden"
  },
  {
    value: 8,
    label: "2019",
    countryCodes: ["392", "410", "348", "040"],
    country: "Hungary"
  },
  {
    value: 9,
    label: "2020",
    countryCodes: ["392", "410"],
    country: "Japan"
  }
];

const TimeTracker = ({ setYear, setCountryCodes, setCountry }) => {
  const classes = useStyles();
  const onChange = (event, value) => {
    const mark = marks.find(mark => mark.value === value);
    if (!mark) { return; }
    setYear(mark.label);
    setCountryCodes(mark.countryCodes);
    setCountry(mark.country);
  }

  return (
    <div className={classes.wrapper}>
      <Typography id="time-tracker" gutterBottom>
        Year
      </Typography>
      <Slider
        className={classes.slider}
        min={0}
        max={10}
        defaultValue={2}
        track={false}
        step={null}
        marks={marks}
        onChange={onChange}
        aria-labelledby="time-tracker"
      />
    </div>
  )
}

export default TimeTracker;