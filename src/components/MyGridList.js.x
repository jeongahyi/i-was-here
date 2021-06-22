import React, { useState } from 'react';
import { 
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    makeStyles,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SlideDialog from './SlideDialog';
import '../styles/MyGridList.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexwrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        heigth: 450,
        transform: 'translateZ(0)',
    },
    gridListTile: {
        cursor: 'pointer'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        top: 0,
    },
    icon: {
        color: 'white',
    },

}));

const MyGridList = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const [country, setCountry] = useState('South Korea');
    // setCountry(props.country);
    // console.log(props.country);
    // let images = album.filter(data => data.country_name === props.country);
    
    // console.log(images);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {props.images.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.featured? 2 : 1} rows={tile.featured? 2 : 1}
                        className={classes.gridListTile}
                        onClick={handleClickOpen}
                    >
                    
                        <img src={`images/${tile.file_name}`} alt={tile.title}/>
                        <GridListTileBar title={tile.title} titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title} ${tile.location_name}`} className={classes.icon}>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />

                    </GridListTile>
                ))}
            </GridList>
            <SlideDialog
                open={open}
                // title={}
                // location_url={}
                // location_name={}
                images={props.images}
                handleClose={handleClose}
            />
        </div>
    );
}
export default MyGridList;