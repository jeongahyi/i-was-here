import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
// import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '40px',
  },
  country: {
    backgroundColor: 'pink',
  },
  year: {
    backgroundColor: 'orange',
  },
}));

const Chips = () => {
  const classes = useStyles();

  const countries = ["South Korea", "Japan", "India", "Sweden", "Hungary"];
  const years = [2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <div className={classes.root}>
      {countries.map((country) => (
        <Chip
          // variant="outlined"
          className={classes.country}
          label={country}
          onClick={handleClick}
          // onDelete={handleDelete}
          // deleteIcon={<DoneIcon />}
          // color="primary"
        />
      ))}
      {years.map((year) => (
        <Chip
          // variant="outlined"
          className={classes.year}
          label={year}
          onClick={handleClick}
          // onDelete={handleDelete}
          // deleteIcon={<DoneIcon />}
          // color="secondary"
        />
      ))}
    </div>
  )
}

export default Chips;