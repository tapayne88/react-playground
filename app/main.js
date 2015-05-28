'use strict'

import React from 'react';
import Router from 'react-router';

import App from './app';
import Inbox from './inbox';
import Calendar from './calendar';
import Dashboard from './dashboard';

let DefaultRoute    = Router.DefaultRoute;
let Route           = Router.Route;

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={Inbox}/>
        <Route name="calendar" handler={Calendar}/>
        <DefaultRoute handler={Dashboard}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});
