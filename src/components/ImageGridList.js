import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

const ImageGridList = ({ images }) => {
    return (
        <div width="300">
            <GridList cellHeight={200} spacing={20}>
                {images.map((tile) => (
                    <GridListTile key={tile.id} cols={tile.featured? 1 : 2} rows={tile.featured? 1: 2}>
                        <img src={`images/${tile.file_name}`} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default ImageGridList;