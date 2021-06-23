import React from 'react';
import {
  Slider,
  Card,
  CardActionArea,
  CardMedia
} from '@material-ui/core';
import {
  Home,
  FlightTakeoff
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { marks } from '../data/mark.json';
import { countries } from '../data/travelData.json';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    marginTop: '40px',
    marginBottom: '60px',
  },
  cardWrapper: {
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
    marginBottom: '5px',
  },
  cardSize: {
    width: 80,
    height: 40,
  },
  iconWrapper: {
    backgroundColor: 'dimgray',
    padding: '5px',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  iconDiv: {
    display: 'flex',
    padding: 'inherit',
  },
}));

const TimeTracker = (props) => {
  const classes = useStyles();
  const valueLabelFormat = (value) => {
    const mark = marks.find(mark => mark.value === value);
    if (!mark) {
      return;
    }
    const travels = mark.countries.travels.join(', ');
    if (mark.file_name) {
      const info = countries.find(country => country.country_code === '840');
      return (
        <div className={classes.cardWrapper}>
          <Card>
            <CardActionArea>
              <CardMedia 
                className={classes.cardSize}
                image={`images/${mark.file_name}`}
                title={mark.label}
                onClick={() => {
                  props.setInfo(info);
                  props.setOpen(true);
                }}
              />
            </CardActionArea>
          </Card>
        </div>
      )
    }
    return (
      <div className={classes.iconWrapper}>
        <div className={classes.iconDiv}>
          <Home fontSize="small"/>
          {mark.countries.home}
        </div>
        <div className={classes.iconDiv}>
          <FlightTakeoff fontSize="small"/>
          {travels}
        </div>
      </div>
    )
  }
  const onChange = (event, value) => {
    const mark = marks.find(mark => mark.value === value);
    if (!mark) { return; }
    props.onChange(mark.label, mark.countries.countries);
  }

  return (
    <div className={classes.wrapper}>
      <Slider
        defaultValue={20}
        track={false}
        step={1}
        marks={marks}
        onChange={onChange}
        getAriaValueText={valueLabelFormat}
        alueLabelFormat={valueLabelFormat}
        valueLabelDisplay="on"
      />
    </div>
  )
}

export default TimeTracker;