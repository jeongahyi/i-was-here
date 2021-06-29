import React, { useState } from 'react';
import * as _ from 'lodash';
import { NaturalEarth } from '@vx/geo';
import { scaleQuantize } from '@vx/scale';
import { useTooltip } from '@vx/tooltip';
import { Zoom } from '@vx/zoom';
import { 
  GradientOrangeRed,
  GradientPinkRed,
  GradientPurpleRed,
} from '@vx/gradient';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Popover,
} from '@material-ui/core';

import ZoomButtons from './ZoomButtons';
import SimpleTooltip from './SimpleTooptip';
import CardTooltip from './CardTooltip';

import { feature } from 'topojson/node_modules/topojson-client';
import topology from '../data/countries-110m.json';
import { countries } from '../data/travelData.json';
import { Pictures } from '../data/images.json';

const useStyles = makeStyles(() => ({
  root: {
    alignSelf: 'center',
  },
  container: {
    position: 'relative',
  },
  grab: {
    cursor: 'grab'
  }
}));

const Geo = ({ width, height, places, setOpen, setCountry, setInfo }) => {
  const classes = useStyles();
  // map data
  const world = feature(topology, topology.objects.countries).features;
  // map size, zoom
  width = width - 50;
  height = height - 100;
  const initialTransform = {
    translateX: width/2,
    translateY: height/2 + 110,
    scaleX: (width / 430) * 100,
    scaleY: (height / 430) * 100,
    scaleXMin:100,
    scaleYMin:100,
    scaleXMax:1000,
    scaleYMax:1000,
    skewX: 0,
    skewY: 0
  };

  // map color
  const backgroundColor = 'antiquewhite';

  const countryColorChange = (feature) => {
    const id = _.get(feature, 'id');
    const color = scaleQuantize({
      domain: [0,840],
      range: ['#666666','#808080','#999999'],
    });
    let bcolor = color(parseInt(id));
    // const defaultColor = '#52514b';
    const highlightColor = "url('#gradientPinkRed')";
    const traveledColor = '#ffc14b';
    // const mouseoverColor = '#49dadc';

    const Traveled = ['156','348','356','392','410','752','840','040'];
    // been there
    if (Traveled.find(place => place === id)) {
      bcolor = traveledColor;
      // mouseover ? 
      if (_.get(tooltipData, 'id') === id) {
        bcolor = "url('#gradientOrangeRed')";
      }
    }
    // the year been there
    if (places.find(place => place === id)) {
      bcolor = highlightColor;
      // mouseover ? 
      if (_.get(tooltipData, 'id') === id) {
        bcolor = "url('#gradientPurpleRed')";
      }
    }

    return bcolor;
  }

  // tooltip
  let tooltipTimeout = 0;
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();


  // timeTracker
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState(null);
  const handleClick = (event, feature) => {
    setCountry(feature.properties.name);
    const info = countries.find(country => country.country_code === feature.id);
    if (info) {
      setInfo(info);
      setOpen(true);
      setAnchorEl(event.currentTarget);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMouseLeave = (zoom) => {
    tooltipTimeout = window.setTimeout(() => {hideTooltip();}, 300);
    if (zoom.isDragging) zoom.dragEnd();
  }
  
  const handleMouseMove = (event, zoom, feature) => {
    zoom.dragMove();
    if (tooltipTimeout) clearTimeout(tooltipTimeout);
    const info = countries.filter(country => country.country_code === feature.id);
    if (info.length > 0) {
      setData(info[0]);
      setAnchorEl(event.currentTarget);
    }
    showTooltip({
      tooltipData: {
        id: feature.id,
        name: feature.properties.name,
        info: info,
        IsTraveled: info.length > 0? true: false,
      }, 
      tooltipTop: event.pageY,
      tooltipLeft: event.pageX,
    });
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <Zoom
        width={width}
        height={height}
        transformMatrix={initialTransform}
      >
      {zoom => (
        <div className={classes.container}>
          <svg 
            width={width}
            height={height}
            className={zoom.isDragging ? 'dragging' : classes.grab}
          >
            <GradientOrangeRed id="gradientOrangeRed" />
            <GradientPinkRed id="gradientPinkRed" />
            <GradientPurpleRed id="gradientPurpleRed" />
            <rect
              x={0}
              y={0}
              rx={14}
              width={width}
              height={height}
              fill={backgroundColor}
              onTouchStart={zoom.dragStart}
              onTouchMove={(event) => {zoom.dragMove();}}
              onTouchEnd={zoom.dragEnd}
              onMouseDown={zoom.dragStart}
              onMouseMove={zoom.dragMove}
              onMouseUp={zoom.dragEnd}
              onMouseLeave={() => {if (zoom.isDragging) zoom.dragEnd();}}
            />
            <NaturalEarth
              data={world}
              scale={zoom.transformMatrix.scaleX}
              translate={[
                zoom.transformMatrix.translateX,
                zoom.transformMatrix.translateY
              ]}
            >
            {NaturalEarth => (
              <g>
              {NaturalEarth.features.map(({ feature, path }, i) => (
                <path 
                  key={`map-feature-${i}`}
                  d={path || ''}
                  fill={countryColorChange(feature)}
                  stroke={'#f9f7e8'}
                  strokeWidth={0.5}
                  cursor={'pointer'}
                  onClick={(event) => (handleClick(event, feature))}
                  onMouseLeave={() => (handleMouseLeave(zoom))}
                  onMouseMove={(event) => (handleMouseMove(event, zoom, feature))}
                />
              ))}
              </g>
            )}
            </NaturalEarth>
          </svg>
          <div>
            <ZoomButtons zoom={zoom} />
          </div>
        </div>
      )}
      </Zoom>

      {anchorEl && data && <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              style={{height:140, width:300}}
              image={`images/${_.get(data, "album[0].pictures[0].file_name", "tokyo4.jpg")}`}
              title={data.country_name}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
              >
                {data.country_name}
              </Typography>
              <Typography>
                {data.purpose} • {data.season} {data.year}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Popover>}

      {tooltipOpen && tooltipData && (
          <SimpleTooltip
            top={tooltipTop}
            left={tooltipLeft}
            data={tooltipData}
          />
        )
      } 
    </div>
  )
}

export default Geo;

    
