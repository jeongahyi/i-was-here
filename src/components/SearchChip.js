import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: '10px'
  },
}))

const SearchChip = ({ label, handleKeywords }) => {
  const classes = useStyles();
  const [color, setColor] = useState("secondary");

  const handleClick = (event, label) => {
    if (color === "secondary") {
      setColor("");
    } else {
      setColor("secondary");
    }
    handleKeywords(label);
  }

  return (
    <Chip
      label={label}
      onClick={(event) => handleClick(event, label)}
      className={classes.chip}
      color={color}
    />
  )
}

export default SearchChip;