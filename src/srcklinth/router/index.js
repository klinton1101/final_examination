import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import theme from "../utils/theme";

import Index from "../pages/index";
import contactUs from "../pages/contactUs";

import { ThemeProvider, createTheme } from "@mui/material";

import { useSelector } from "react-redux";

export default function RouterComponent() {
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));

  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Switch>

          <Route component={Index} path="/indexklinth" />
          <Route
            component={contactUs}
            path="/contactusklinth"
            exact
          />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}
