import React, { useState } from 'react';
import * as _ from 'lodash';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  MobileStepper,
} from '@material-ui/core';
import { 
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  card: {
    overflow: 'auto',
    display: 'contents',
  },
  cardActionArea: {
    marginBottom: '10px',
  },
  cardMedia: {
    height: 320,
    width: 450,
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
  const maxSteps = _.get(data, 'images.length');
  const images = _.get(data, 'images');

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.cardMedia}
          image={images[activeStep].imgPath}
          title={data.country_name}
          style={{width: width}}
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
        <CardContent>
          <Typography variant="h6" component="h2">
            {data.country}
          </Typography>
          <Typography>
            {data.purpose} • {data.season} {data.year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;