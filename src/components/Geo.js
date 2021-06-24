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

import GeoTooltip from './GeoTooltip';
import ZoomButtons from './ZoomButtons';
import TimeTracker from './TimeTracker';

import { feature } from 'topojson/node_modules/topojson-client';
import topology from '../data/countries-110m.json';
import { countries } from '../data/travelData.json';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative'
  },
  grab: {
    cursor: 'grab'
  }
}));

const Geo = ({ width, height, setOpen, setCountry, setInfo }) => {
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
      range: ['#4d4d4d','#666666','#808080','#999999'],
    });
    let bcolor = color(parseInt(id));
    // const defaultColor = '#52514b';
    const highlightColor = "url('#gradientPinkRed')";
    const traveledColor = '#FFA500';//#ffc14b';
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

  // Change time tracker value
  const [year, setYear] = useState(2013);
  const [places, setPlaces] = useState(['410','156']);
  const handleSliderChange = (year ,countries) => {
    setYear(year);
    setPlaces(countries);
  }

  // timeTracker
  // const [click, setClick]
    
  return (
    <div>
      <Zoom width={width} height={height} transformMatrix={initialTransform}>
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
              width={width}
              height={height}
              fill={backgroundColor}
              rx={14} 
              onTouchStart={zoom.dragStart}
              onTouchMove={(event) => {
                zoom.dragMove();
              }}
              onTouchEnd={zoom.dragEnd}
              onMouseDown={zoom.dragStart}
              onMouseMove={zoom.dragMove}
              onMouseUp={zoom.dragEnd}
              onMouseLeave={() => {
                if (zoom.isDragging) zoom.dragEnd();
              }}
            />
            <NaturalEarth
              data={world}
              scale={zoom.transformMatrix.scaleX}
              translate={[zoom.transformMatrix.translateX, zoom.transformMatrix.translateY]}
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
                  onClick={() => {
                    setCountry(feature.properties.name);
                    const info = countries.find(country => country.country_code === feature.id);
                    if (info) {
                      setInfo(info);
                      setOpen(true);
                    }      
                  }}
                  onMouseLeave={() => {
                    tooltipTimeout = window.setTimeout(() => {hideTooltip();}, 300);
                    if (zoom.isDragging) zoom.dragEnd();
                  }}
                  onMouseMove={(event) => {
                    zoom.dragMove();
                    if (tooltipTimeout) clearTimeout(tooltipTimeout);
                    const info = countries.filter(country => country.country_code === feature.id);
                    showTooltip({
                      tooltipData: {
                        id: feature.id,
                        name: feature.properties.name,
                        info: info,
                      }, 
                      tooltipTop: event.clientY,
                      tooltipLeft: event.clientX
                    });
                  }}
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
      <TimeTracker
        onChange={handleSliderChange}
        setOpen={setOpen}
        setInfo={setInfo}
      />
      {tooltipOpen && tooltipData && (<GeoTooltip top={tooltipTop} left={tooltipLeft} data={tooltipData} />)} 
    </div>
  )
}

export default Geo;

    
