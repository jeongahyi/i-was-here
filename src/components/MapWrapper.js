import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, IconButton, Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Map from "./Map";
import List from "./List";
import useSize from "../utils/useSize";

const drawerWidth = 700;
const buttonWidth = drawerWidth + 30;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top: "auto",
    width: "60px",
    left: "0",
    marginLeft: "10px",
    marginTop: "10px",
    borderRadius: "5%",
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    top: "auto",
    width: "60px",
    left: "0",
    marginLeft: buttonWidth,
    marginTop: "10px",
    borderRadius: "5%",
  },
  menuButton: {
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    fontSize: "1rem",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    paddingLeft: "10px",
    display: "contents",
  },
  drawerPaper: {
    width: drawerWidth,
    top: "auto",
    overflowY: "auto",
    padding: "10px",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MapWrapper = ({ trips }) => {
  const classes = useStyles();
  const [width, height] = useSize();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

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
          <span>
            <Menu />
          </span>
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
        <List trips={trips} drawerWidth={drawerWidth} />
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Map trips={trips} width={width} height={height} />
      </div>
    </>
  );
};

export default MapWrapper;
