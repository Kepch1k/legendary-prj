import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";

function RouterNavigation() {

    return (
        <Router>
            <Switch>
                <Route
                    component={Home}
                    exact
                    path="/"
                />

                <Route
                    component={Home}
                    exact
                    path="/home"
                />

                <Route
                    component={Login}
                    exact
                    path="/login"
                />

                <Route component={NotFound}/>
            </Switch>
        </Router>
    );

}

export default RouterNavigation;
