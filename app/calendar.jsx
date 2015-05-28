'use strict'

import React from 'react';
import Router from 'react-router';

let Link            = Router.Link;
let RouteHandler    = Router.RouteHandler;

export default class Calendar extends React.Component {
    renderRows() {
        let day = 1;
        let rows = [];
        for (let i = 0; i < 4; i++) {
            let cols = [];
            for (let j = 0; j < 7; j++) {
                cols.push(<td>{day++}</td>);
            }
            rows.push(<tr>{cols}</tr>);
        }
        return rows;
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tues</th>
                            <th>Wed</th>
                            <th>Thur</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
