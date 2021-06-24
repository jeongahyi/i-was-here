import React from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { countries } from '../data/travelData.json';
import Chips from './Chips';

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

const Images = () => {
  const classes = useStyles();

  const country_code = "840";
  const info = countries.find(country => country.country_code === country_code);    
  
  const album = _.get(info, 'album', []);
  if (album.length < 1) {return false;}

  const data = album[0].pictures;
  return (
    <section className={classes.root}>
      <div>
        <Typography variant="h5" gutterBottom>Pictures</Typography>
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
        {data.map((tile, i) => (
          <GridListTile
            key={i}
            cols={1}
            rows={2}
            // cols={tile.vertical? 2 : 1}
            // rows={tile.horizontal? 2 : 1}
          >
            <img src={`images/${tile.file_name}`} alt={tile.file_name} />
          </GridListTile>
        ))}
        </GridList>
      </div>
    </section>
  )
}

export default Images;