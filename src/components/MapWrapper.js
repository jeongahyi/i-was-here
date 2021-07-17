import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  AppBar,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Map from './Map';
import List from './List';
import useSize from '../utils/useSize';

const drawerWidth = 650;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top: 'auto',
    width: '100px',
    left: '0',
    marginTop: '10px'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: 'auto',
    width: '100px',
    left: '0',
    marginTop: '10px'
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingLeft: '10px',
    display: 'contents',
  },
  drawerPaper: {
    width: drawerWidth,
    top: 'auto',
    overflowY: 'auto',
    padding: '10px'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MapWrapper = ({ mapInfo, filterCodes }) => {
  const classes = useStyles();
  const [width, height] = useSize();

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <IconButton
          color="inherit"
          aria-label="drawer"
          onClick={handleDrawer}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <span><Menu />list</span>
        </IconButton>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List
          filterCodes={filterCodes}
          mapInfo={mapInfo}
          drawerWidth={drawerWidth}
        />
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Map
          mapInfo={mapInfo}
          width={width}
          height={height}
          filterCodes={filterCodes}
        />
      </div>
    </>
  )
}

export default MapWrapper;