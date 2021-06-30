import React from 'react';
import { Tooltip } from '@vx/tooltip';

const ToolTip = ({ top, left, data }) => {
  return (
    <Tooltip top={top} left={left}>
      <strong>{data.name}</strong>
    </Tooltip>
  )
}

export default ToolTip;