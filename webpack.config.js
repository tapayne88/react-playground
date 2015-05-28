var path = require('path');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './app/main.js']
    },
    output: {
        path: './build',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
