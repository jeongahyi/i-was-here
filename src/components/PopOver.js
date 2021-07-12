import React from 'react';
import * as _ from 'lodash';
import { Popover } from '@material-ui/core';
import CardItem from './CardItem';

const PopOver = ({ data, id, open, anchorEl, setAnchorEl }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => (setAnchorEl(null))}
      anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      transformOrigin={{ vertical: 'center', horizontal: 'center' }}
    >
      <CardItem data={data} />
    </Popover>
  )
}

export default PopOver;