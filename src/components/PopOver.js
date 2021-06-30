import React, { useState } from 'react';
import * as _ from 'lodash';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Popover,
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
  cardMedia: {
    height: 180,
    width: 350,
  }
}));

const PopOver = ({ data, id, open, anchorEl, setAnchorEl }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  
  const maxSteps = _.get(data, 'images.length');
  const images = _.get(data, 'images');
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => (setAnchorEl(null))}
      anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      transformOrigin={{ vertical: 'center', horizontal: 'center' }}
    >
      <Card>
        <CardActionArea>
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
    </Popover>
  )
}

export default PopOver;