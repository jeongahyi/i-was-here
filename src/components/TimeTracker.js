import React from 'react';
import { Typography, Slider, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Home, FlightTakeoff } from '@material-ui/icons';

import { marks } from '../data/mark.json';
import '../styles/TimeTracker.scss';
import { countries } from '../data/travelData.json';

const TimeTracker = (props) => {
    const valueLabelFormat = (value) => {
        const mark = marks.find(mark => mark.value === value);
        if (!mark) { 
            return;
        }
        const travels = mark.countries.travels.join(', ');
        if (mark.file_name) {
            const info = countries.find(country => country.country_code === '840');
            return (
                <div style={{backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginBottom: '5px',}}>
                    <Card>
                        <CardActionArea>
                            <CardMedia 
                                style={{width: 80, height: 40}}
                                image={`images/${mark.file_name}`}
                                title={mark.label}
                                onClick={() => {
                                    props.setInfo(info);
                                    props.setOpen(true);
                                }}
                            />
                        </CardActionArea>
                    </Card>
                </div>
            )
        }
        return (
            <div style={{backgroundColor: 'dimgray', padding: '5px', borderRadius: '5px', marginBottom: '15px',}}>   
                <div style={{display: 'flex',padding: 'inherit'}}>
                    <Home fontSize="small"/>{mark.countries.home}
                </div>
                <div style={{display: 'flex',padding: 'inherit'}}>
                    <FlightTakeoff fontSize="small"/>{travels}
                </div>
            </div>
        )
    }
    const onChange = (event, value) => {
        const mark = marks.find(mark => mark.value === value);
        if (!mark) { return; }
        props.onChange(mark.label, mark.countries.countries);
    }

    return (
        <div className="timeTracker">
            <Typography>Time Track</Typography>
            <Slider 
                defaultValue={20}
                track={false}
                step={1}
                marks={marks}
                onChange={onChange}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                valueLabelDisplay="on"    
            />
        </div>
    )
}

export default TimeTracker;