'use strict'

import React from 'react';
import Router from 'react-router';

let Link            = Router.Link;
let RouteHandler    = Router.RouteHandler;

export default class Inbox extends React.Component {
    render() {
        let style = {
            'fontWeight': 'bold'
        }

        return (
            <div>
                <p>You have <span style={style}>0</span> new messages</p>
            </div>
        );
    }
}
