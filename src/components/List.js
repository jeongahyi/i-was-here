import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Divider } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import CardItem from "./CardItem";

const useStyles = makeStyles((theme) => ({
  filter: {
    marginBottom: "10px",
  },
  items: {
    margin: "5px",
    paddingBottom: "100px",
  },
}));

const List = ({ trips, drawerWidth }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.filter}>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterList />
          </IconButton>
        </Tooltip>
        <Divider />
      </div>
      <div className={classes.items}>
        {trips &&
          trips.map((trip) => {
            return <CardItem key={trip.id} trip={trip} width={drawerWidth} />;
          })}
      </div>
    </div>
  );
};

export default List;
