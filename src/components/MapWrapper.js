import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  AppBar,
  IconButton,
  Drawer,
  Tooltip,
  Divider,
} from '@material-ui/core';
import { Menu, FilterList } from '@material-ui/icons';
import Map from './Map';
import CardItem from './CardItem';

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
  filter: {
    marginBottom: '10px',
  }
}));

const MapWrapper = ({ mapInfo, countryCodes }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []);

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
        <div className={classes.filter}>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterList />
            </IconButton>
          </Tooltip>
          <Divider />
        </div>
        {Object.keys(mapInfo).map((countryId) => {
          const countryInfo = mapInfo[countryId];
          return <CardItem key={countryId} data={countryInfo} width={drawerWidth} />
        })}
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
          countryCodes={countryCodes}
        />
      </div>
    </>
  )
}

export default MapWrapper;