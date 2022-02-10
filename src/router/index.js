import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

import theme from "../utils/theme";

import Home from "../pages/home";
import Nav from "../components/nav"

//ELINALD
import Indexeli from "../pages_eli";
import mainpageeli from "../pages_eli/Mainpage";
//KLINTH
import Indexklinth from "../srcklinth/pages/index";
import contactUslklinth from "../srcklinth/pages/contactUs";

//abe
import Indexabe from "../srcabe/pages/index";
import contactUsabe from "../srcabe/pages/contactUs";

//ACE
import Indexace from "../srcace/pages/";
//MARCY
import Indexmarcy from "../srcmarcy/pages/index";

import { useSelector } from "react-redux";

export default function RouterComponent() {
    const ui = useSelector((state) => state.ui);
    const THEME = createTheme(theme(ui.isDarkMode));

    return (
        <ThemeProvider theme={THEME}>
            <Router>
            <Nav/>
                <Switch>
                <Route component={Home} exact path="/" />
                    <Route component={Indexeli} exact path="/indexeli" />
                    <Route component={mainpageeli} exact path="/mainpageeli" />

                    <Route component={Indexklinth} path="/indexklinth" />
                    <Route component={contactUslklinth} path="/contactusklinth" exact />

                    <Route component={Indexabe} path="/indexabe" />
                    <Route component={contactUsabe} path="/contactusabe" exact />

                    <Route component={Indexace} path="/indexace" exact />

                    <Route component={Indexmarcy} path="/indexmarcy" exact />

                </Switch>
            </Router>
        </ThemeProvider>
    )
}