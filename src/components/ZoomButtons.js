import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import '../styles/Button.scss';
import { Refresh } from '@material-ui/icons';

const ZoomButtons = (props) => {
    const zoom = props.zoom;
    return (
        <div className="controls">
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