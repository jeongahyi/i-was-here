import React from "react";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Refresh } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    bottom: "70px",
    right: "20px",
  },
}));

const ZoomButtons = ({ zoom }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup size="small" orientation="vertical" variant="contained">
        <Button onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}>
          +
        </Button>
        <Button onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}>
          -
        </Button>
      </ButtonGroup>
      <IconButton aria-label="Refresh" onClick={zoom.reset}>
        <Refresh fontSize="small" />
      </IconButton>
    </div>
  );
};

export default ZoomButtons;
