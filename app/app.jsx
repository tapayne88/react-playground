'use strict'

import React from 'react';
import Router from 'react-router';

let Link            = Router.Link;
let RouteHandler    = Router.RouteHandler;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>App</h1>
                    <ul>
                        <li><Link to="app">Dashboard</Link></li>
                        <li><Link to="inbox">Inbox</Link></li>
                        <li><Link to="calendar">Calendar</Link></li>
                    </ul>
                    Logged in as Jane
                </header>

                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
}
