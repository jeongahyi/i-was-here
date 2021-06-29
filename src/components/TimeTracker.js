import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    marginBottom: '20px',
    padding: '35px',
    paddingLeft: '10px',
  },
  slider: {
    color: 'lightcoral',
  }
}));

const marks = [
  {
    value: 1,
    label: "2010",
    countries: ["410", "156"]
  },
  {
    value: 2,
    label: "2013",
    countries: ["410", "392", "840"]
  },
  {
    value: 3,
    label: "2014",
    countries: ["840"]
  },
  {
    value: 4,
    label: "2015",
    countries: ["840", "410"]
  },
  {
    value: 5,
    label: "2016",
    countries: ["410", "392", "356"]
  },
  {
    value: 6,
    label: "2017",
    countries: ["392", "410"]
  },
  {
    value: 7,
    label: "2018",
    countries: ["392", "410", "752"]
  },
  {
    value: 8,
    label: "2019",
    countries: ["392", "410", "348", "040"]
  },
  {
    value: 9,
    label: "2020",
    countries: ["392", "410"]
  }
];

const TimeTracker = ({ handleSliderChange }) => {
  const classes = useStyles();
  const onChange = (event, value) => {
    const mark = marks.find(mark => mark.value === value);
    if (!mark) { return; }
    handleSliderChange(mark.label, mark.countries);
  }

  return (
    <div className={classes.wrapper}>
      <Slider
        className={classes.slider}
        orientation="vertical"
        min={0}
        max={10}
        defaultValue={1}
        track={false}
        step={null}
        marks={marks}
        onChange={onChange}
        aria-labelledby="vertical-slider"
      />
    </div>
  )
}

export default TimeTracker;