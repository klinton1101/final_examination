import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../pages/index";
import Home from "../../pages/home";
import { useSelector } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material";

export default function RouterComponent() {
  const ui = useSelector((state) => state.ui);
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#d94e4e",
      },
      error: {
        main: "#f74437",
      },
      background: {
        paper: "#f2f3f6",
      },
    },
    typography: {
      fontFamily: "Century Gothic",
      fontWeightRegular: 300,
    },
  });

  const darkMode = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#d94e4e",
      },
      error: {
        main: "#f44336",
      },
      background: {
        paper: "#20396b",
        default: "#102040",
      },
      text:{
        primary:"#FFFFFF",
      }
    },
    typography: {
      fontFamily: "Century Gothic",
      fontWeightRegular: 300,

    },
  });

  return (
    <ThemeProvider theme={ui.isDarkMode ? darkMode : lightTheme}>
      <Router>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
