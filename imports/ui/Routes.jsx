import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import App from "./App";
import instructorFeedback from "./instructorFeedback";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path = "/instructorFeedback" component={instructorFeedback} />
            <Route exact path = "/" component={App} />
        </Switch>
    </Router>
)