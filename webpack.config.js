let path = require('path');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production"
        ? false
        : "cheap-module-eval-source-map";
    return conf
};