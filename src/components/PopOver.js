import React from "react";
import * as _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@material-ui/core";
import { School } from "@material-ui/icons";

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
const PopOver = ({ trip, id, open, anchorEl, setAnchorEl }) => {
  const classes = useStyles();

  const countryName = _.get(trip, "country_name", []);
  const title = _.get(trip, "title");
  const date = _.get(trip, "start_date").toDate().getFullYear();
  const memo = _.get(trip, "memo");
  const tags = _.get(trip, "tags", []);
  console.log(tags);
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
            {countryName}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {date}
          </Typography>
          <Typography variant="body2" component="p">
            {memo ||
              "Lorem ipsum dolor sit amet, et ridens laboramus deterruisset quo, an ubique delenit voluptua per."}
          </Typography>
          {tags &&
            Object.keys(tags)
              .filter((tag) => tags[tag] === true)
              .map((word) => (
                <Chip
                  icon={<School />}
                  key={word}
                  label={word}
                  variant="outlined"
                  color="primary"
                  className={classes.chip}
                />
              ))}
        </CardContent>
      </Card>
    </Popover>
  );
};

export default PopOver;
