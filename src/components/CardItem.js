import React from "react";
import * as _ from "lodash";
import { Grid, ButtonBase, Chip, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { School, Work, Loyalty, LocalSee } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "unset",
    padding: "5px",
    // display: 'contents',
  },
  item: {
    padding: "20px",
  },
  chip: {
    margin: "5px",
  },
  image: {
    width: 320,
    height: 200,
  },
  img: {
    margin: "auto",
    display: "block",
    minWidth: 320,
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "7px",
  },
}));

const CardItem = ({ data }) => {
  const classes = useStyles();

  // TO DO: case - no images make default images
  const images = _.get(data, "images");
  const keywords = _.get(data, "keyword", []);
  const years = _.get(data, "year", []);

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item className={classes.item}>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src={images[0].imgPath}
            ></img>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container className={classes.item}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {data.country}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Title
              </Typography>
              <div>
                {years &&
                  years.map((time) => (
                    <Chip
                      icon={<Loyalty />}
                      key={time}
                      label={time}
                      variant="outlined"
                      color="secondary"
                      className={classes.chip}
                    />
                  ))}
              </div>
              <div>
                {keywords &&
                  keywords.map((word) => (
                    <Chip
                      icon={<School />}
                      key={word}
                      label={word}
                      variant="outlined"
                      color="primary"
                      className={classes.chip}
                    />
                  ))}
              </div>
              <Typography variant="body2" color="textSecondary"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

export default CardItem;
