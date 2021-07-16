import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  IconButton,
  Tooltip,
  Divider,
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import CardItem from './CardItem';

const useStyles = makeStyles((theme) => ({
  list: {
    [theme.breakpoints.up('md')]: {

    }
  },
  filter: {
    marginBottom: '10px',
  },
}));

const List = ({ filterCodes, mapInfo, drawerWidth }) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <div className={classes.filter}>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterList />
          </IconButton>
        </Tooltip>
        <Divider />
      </div>
      <div>
        {filterCodes.map((countryId) => {
          const countryInfo = mapInfo[countryId];
          return <CardItem
            key={countryId}
            data={countryInfo}
            width={drawerWidth}
          />
        })}
      </div>
    </div>
  )
}

export default List;