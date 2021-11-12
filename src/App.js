import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Container from "./components/Container";
import "./styles/global.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF8E53",
    },
    secondary: {
      main: "#FE6B8B",
    },
  },
});

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
    <ThemeProvider theme={theme} className={classes.root}>
      <Container />
    </ThemeProvider>
  );
};

export default App;
