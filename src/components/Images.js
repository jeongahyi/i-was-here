import React from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chips from './Chips';
import { Pictures } from '../data/images.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridList: {
    width: 1200,
  },
}));

const Images = ({ pictures }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div>
        <Typography variant="h5" gutterBottom>
          Pictures
        </Typography>
        <Divider />
      </div>
      <Chips />
      <div className={classes.images}>
        <GridList
          cellHeight={200}
          className={classes.gridList}
          cols={3}
          spacing={20}
        >
          {Pictures && Pictures.length > 0 && 
            Pictures.map((tile) => (
            <GridListTile
              key={tile.url}
              cols={tile.vertical? 2 : 1}
              rows={2}
              // rows={tile.horizontal? 2 : 1}
            >
              <img src={`images/${tile.url}`} alt={tile.title} />
              <p>{tile.country} {tile.date}</p>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </section>
  )
}

export default Images;