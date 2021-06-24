import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    bottom: '10px',
    right: '40px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
}));

const ZoomButtons = (props) => {
  const classes = useStyles();
  const zoom = props.zoom;
  return (
    <div className={classes.root}>
      <ButtonGroup size="small" orientation="vertical" variant="contained">
        <Button onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2})}>
          +
        </Button>
        <Button onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8})}>
          -
        </Button>
      </ButtonGroup>
      <div>
        <IconButton aria-label="Refresh" onClick={zoom.reset}>
          <Refresh fontSize="small" />
        </IconButton>
      </div>
    </div>
  )
}

export default ZoomButtons;