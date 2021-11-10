import React from "react";
import * as _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

const CardItem = ({ trip }) => {
  const classes = useStyles();
  // country, title, date, tags, image
  const countryName = _.get(trip, "country_name");
  const tags = _.get(trip, "tags", []);
  // TO DO: title, start_date, end_date input
  const title = _.get(trip, "title", "dummy TITLE");
  const years = ["1000"];
  const image = _.get(trip, "image_url", "");
  const defaultImage =
    "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60";

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item className={classes.item}>
          <ButtonBase className={classes.image}>
            <LazyLoadImage
              className={classes.img}
              alt={`${countryName}'s picture`}
              src={image || defaultImage}
            ></LazyLoadImage>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container className={classes.item}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {countryName}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {title}
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
                {tags &&
                  tags.map((word) => (
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
