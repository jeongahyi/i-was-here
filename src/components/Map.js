import React, { useState } from "react";
import * as _ from "lodash";
import { NaturalEarth } from "@vx/geo";
import { scaleQuantize } from "@vx/scale";
import { useTooltip } from "@vx/tooltip";
import { Zoom } from "@vx/zoom";
import { GradientPinkRed } from "@vx/gradient";
import { makeStyles } from "@material-ui/core/styles";
import ZoomButtons from "./ZoomButtons";
import ToolTip from "./ToolTip";
import PopOver from "./PopOver";
import FormDialog from "./FormDialog";
import { feature } from "topojson/node_modules/topojson-client";
import topology from "../data/countries-110m.json";

// map data
const world = feature(topology, topology.objects.countries).features;

const useStyles = makeStyles(() => ({
  root: {
    alignSelf: "center",
  },
  grab: {
    cursor: "grab",
  },
}));

const Map = ({ trips, width, height }) => {
  const classes = useStyles();
  // map size, zoom
  const initialTransform = {
    translateX: width / 2,
    translateY: height / 2,
    scaleX: (width / 430) * 100,
    scaleY: (height / 430) * 100,
    scaleXMin: 100,
    scaleYMin: 100,
    scaleXMax: 1000,
    scaleYMax: 1000,
    skewX: 0,
    skewY: 0,
  };

  // map color
  const changeColor = (feature) => {
    const id = _.get(feature, "id");
    const countryColor = scaleQuantize({
      domain: [0, 840],
      range: ["#666666", "#808080", "#999999"],
    });
    let color = countryColor(parseInt(id));

    // traveled
    if (getTripInfo(id)) {
      color = "url('#gradientPinkRed')";
    }

    // traveled in the year
    // if (filterCodes.find((code) => code === id)) {
    //   color = "url('#gradientPinkRed')";
    // }

    return color;
  };

  const getTripInfo = (id) => {
    return trips.find((trip) => trip.map_id == id);
  };

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

  // popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [trip, setTrip] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [formOpen, setFormOpen] = useState(false);
  // TO DO: refactor countryInfo with trip info
  const [countryInfo, setCountryInfo] = useState(null);
  const handleClick = (event, feature) => {
    if (getTripInfo(feature.id)) {
      setTrip(getTripInfo(feature.id));
      setAnchorEl(event.currentTarget);
    } else {
      console.log(feature);
      setCountryInfo(feature);
      setFormOpen(true);
    }
  };

  const handleClose = () => {
    setFormOpen(false);
  };
  const handleMouseLeave = (zoom) => {
    tooltipTimeout = window.setTimeout(() => {
      hideTooltip();
    }, 300);
    if (zoom.isDragging) zoom.dragEnd();
  };

  const handleMouseMove = (event, zoom, feature) => {
    zoom.dragMove();
    if (tooltipTimeout) clearTimeout(tooltipTimeout);

    showTooltip({
      tooltipData: { name: feature.properties.name },
      tooltipTop: event.pageY,
      tooltipLeft: event.pageX,
    });
  };

  return (
    <div className={classes.root}>
      <Zoom width={width} height={height} transformMatrix={initialTransform}>
        {(zoom) => (
          <div>
            <svg
              width={width}
              height={height}
              className={zoom.isDragging ? "dragging" : classes.grab}
            >
              <GradientPinkRed id="gradientPinkRed" />
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={"antiquewhite"}
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
                translate={[
                  zoom.transformMatrix.translateX,
                  zoom.transformMatrix.translateY,
                ]}
              >
                {(NaturalEarth) => (
                  <g>
                    {NaturalEarth.features.map(({ feature, path }, i) => (
                      <path
                        key={`map-feature-${i}`}
                        d={path || ""}
                        fill={changeColor(feature)}
                        stroke={"#f9f7e8"}
                        strokeWidth={0.5}
                        cursor={"pointer"}
                        onClick={(event) => handleClick(event, feature)}
                        onMouseLeave={() => handleMouseLeave(zoom)}
                        onMouseMove={(event) =>
                          handleMouseMove(event, zoom, feature)
                        }
                      />
                    ))}
                  </g>
                )}
              </NaturalEarth>
            </svg>
            <ZoomButtons zoom={zoom} />
          </div>
        )}
      </Zoom>
      {anchorEl && trip && (
        <PopOver
          trip={trip}
          id={id}
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
      )}
      {tooltipOpen && tooltipData && (
        <ToolTip top={tooltipTop} left={tooltipLeft} data={tooltipData} />
      )}
      <FormDialog
        open={formOpen}
        onClose={handleClose}
        countryInfo={countryInfo}
      />
    </div>
  );
};

export default Map;
