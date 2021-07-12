import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const TimeRadioButtons = () => {
  const [year, setYear] =useState('2013');
  const handleChange = (event) => {
    setYear(event.target.value);
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Year</FormLabel>
      <RadioGroup aria-label="year" name="year" value={year} onChange={handleChange}>
        <FormControlLabel value="2013" control={<Radio />} label="2013" />
        <FormControlLabel value="2014" control={<Radio />} label="2014"/>
        <FormControlLabel value="2015" control={<Radio />} label="2015"/>
      </RadioGroup>
    </FormControl>
  )
}

export default TimeRadioButtons;