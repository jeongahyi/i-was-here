import React from 'react';
import { Tooltip } from '@vx/tooltip';

const SimpleTooltip = ({ top, left, data }) => {
  return (
    <Tooltip
      top={top}
      left={left}
    >
      <strong>{data.name}</strong>
    </Tooltip>
  )
}

export default SimpleTooltip;