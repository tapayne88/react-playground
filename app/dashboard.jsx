'use strict'

import React from 'react';
import Router from 'react-router';

let Link            = Router.Link;
let RouteHandler    = Router.RouteHandler;

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>This is the dashboard</p>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
}
