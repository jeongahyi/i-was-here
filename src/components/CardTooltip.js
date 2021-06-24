import React from 'react';
import * as _ from 'lodash';
import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Tooltip, defaultStyles } from '@vx/tooltip';

const CardTooltip = ({ top, left, data }) => {
  const info = data.info[0];
  const image = info.main_picture ||  'default.jpg';
  const bull = <span>•</span>;
  return (
    <Tooltip
      top={top}
      left={left}
      style={{...defaultStyles, padding: '0px', width:300}}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            style={{height:140}}
            image={`images/${image}`}
            title={data.name}
          />
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
            >
              {data.name}
            </Typography>
            <Typography>
              {info.purpose} {bull} {info.season} {info.year}
            </Typography>
            {/* <Typography
              variant="body2"
              component="p"
            >
              {info.paragraph}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}

export default CardTooltip;