import React, { useState } from 'react';
import * as _ from 'lodash';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  MobileStepper,
} from '@material-ui/core';
import { 
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  School,
  Work,
  Loyalty,
  LocalSee,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: 'unset',
    // display: 'contents',
  },
  cardActionArea: {
    padding: '10px',
    marginBottom: '10px',
  },
  cardMedia: {
    height: 320,
    width: '100%',
  },
  cardContent: {
    padding: '5px',
  },
  chip: {
    margin: '5px',
  }
}));

const CardItem = ({ data, width }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const maxSteps = _.get(data, 'images.length', 0);
  // TO DO: case - no images make default images
  const images = _.get(data, 'images');
  const keywords = _.get(data, 'keyword', []);
  const years = _.get(data, 'year', []);

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardMedia}
          image={images[activeStep].imgPath}
          title={data.country_name}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h2">
            {data.country}
          </Typography>
          <div>
           {/* TO DO : make  list component */}
            {keywords && keywords.map(word => (
              <Chip
                icon={<School />}
                key={word}
                label={word}
                variant="outlined"
                color="primary"
                className={classes.chip}
              />
            ))}
            {years && years.map(time => (
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;