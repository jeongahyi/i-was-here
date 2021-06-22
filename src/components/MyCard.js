import React from 'react';
import * as _ from 'lodash';
import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';

const MyCard = ({ data }) => {
    const info = data.info[0];
    const image = info.main_picture ||  'default.jpg';
    const bull = <span>•</span>;
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    style={{height:140}}
                    image={`images/${image}`}
                    title={data.name}
                />
                <CardContent>
                    <Typography　variant="h5" component="h2">{data.name}</Typography>
                    <Typography color="">{info.purpose} {bull} {info.season}, {info.year}</Typography>
                    <Typography variant="body2" component="p">{info.paragraph}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MyCard;