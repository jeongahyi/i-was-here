import React from "react";
import * as _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginButtom: 12,
  },
});
const PopOver = ({ data, id, open, anchorEl, setAnchorEl }) => {
  const classes = useStyles();
  const keywords = _.get(data, "keyword", []);
  const years = _.get(data, "year", []);
  const country = _.get(data, "country", []);
  // TO DO: display image
  // const maxSteps = _.get(data, 'images.length', 0);
  // // TO DO: case - no images make default images
  // const images = _.get(data, 'images');
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
      transformOrigin={{ vertical: "center", horizontal: "center" }}
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {country}
          </Typography>
          <Typography variant="h5" component="h2">
            Title
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {years}
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet, et ridens laboramus deterruisset quo, an
            ubique delenit voluptua per.
          </Typography>
          <Typography>{keywords}</Typography>
        </CardContent>
      </Card>
    </Popover>
  );
};

export default PopOver;
