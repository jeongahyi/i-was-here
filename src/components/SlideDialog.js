import React from 'react';
import * as _ from 'lodash';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography, Link } from '@material-ui/core';
import LocationOn from '@material-ui/icons/LocationOn';
import '../styles/Geo.scss';
import ImageGridList from './ImageGridList';

const SlideDialog = ({open, info, handleClose}) => {
    console.log('SildeDialog');
    const album = _.get(info, 'album', []);
    if (album.length < 1) {return false;}
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth={"lg"}
        >
            <DialogTitle id="scroll-dialog-description">
                {info.country_name}
                {info.year}
            </DialogTitle>
            <DialogContent dividers={false}>
                {album.map((value) => (
                    <DialogContentText id="scroll-dialog-description">
                        <Typography variant="button" display="block" gutterBottom>
                            {value.title}
                            <Link 
                                href={value.location_url} 
                                className="address"
                                target="_blank"
                            >
                                {value.location_name}
                                <LocationOn fontSize="small"/>
                            </Link>
                        </Typography>
                        <ImageGridList images={value.pictures} />
                    </DialogContentText>
                ))}
            </DialogContent>
        </Dialog>
    )
}

export default SlideDialog;