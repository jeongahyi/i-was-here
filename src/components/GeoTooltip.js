import React from 'react';
import { Tooltip, defaultStyles } from '@vx/tooltip';
import MyCard from './MyCard';

const GeoTooltip = ({top, left, data}) => {
    const isShowDetails = data.info.length > 0;
    const tooltip = isShowDetails?
        <Tooltip top={top} left={left} style={{...defaultStyles, padding: '0px'}}>
            <MyCard data={data} />
        </Tooltip>
        : <Tooltip top={top} left={left}>
            <strong>{data.name}</strong>
        </Tooltip>
    return (<>{tooltip}</>)
}

export default GeoTooltip;