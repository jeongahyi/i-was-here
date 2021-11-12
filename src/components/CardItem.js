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

  const countryName = _.get(trip, "country_name");
  const title = _.get(trip, "title", "dummy TITLE");
  const date = _.get(trip, "start_date").toDate().getFullYear();
  const memo = _.get(trip, "memo");
  const tags = _.get(trip, "tags", []);
  const image = `https://source.unsplash.com/random/320×200?${countryName}&auto=format&fit=crop`;

  return (
    <div className={classes.card}>
      <Grid container>
        <Grid item className={classes.item}>
          <ButtonBase className={classes.image}>
            <LazyLoadImage
              className={classes.img}
              alt={`${countryName}'s picture`}
              src={image}
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
              <Typography variant="body2" component="p">
                {memo ||
                  "Lorem ipsum dolor sit amet, et ridens laboramus deterruisset quo, an ubique delenit voluptua per."}
              </Typography>
              <div>
                {date && (
                  <Chip
                    icon={<Loyalty />}
                    label={date}
                    variant="outlined"
                    color="secondary"
                    className={classes.chip}
                  />
                )}
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
