import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "./components/Container";
import "./styles/global.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      margin: "0",
      minHeight: "100vh",
    },
    overflow: "hidden",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container />
    </div>
  );
};

export default App;
