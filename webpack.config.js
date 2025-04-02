// After using npm to install packages, use require to import
// the packages make them available in the config.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Main object of the config where you set options for webpack
module.exports = {
    // Enables useful names for modules and chunks
    mode: 'development',
    // A file path from the config file to the entry module
    entry: './src/index.js',
    // Tells webpack how to write the compiled files to disk
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // Cleans output folder each
        // time before bundling files into it
        clean: true,
    },
    // Adds extra functionality. Since plugins can take 
    // arguments/options, you must pass a 'new' instance 
    // to the plugins property
    plugins: [
        // Simplifies creation of HTML files that use the
        // webpack modules
        new HtmlWebpackPlugin({
            // Uses a template file to generate index.html in dist
            template: './src/template.html',
        }),
    ],
    // Determine how the different types of modules are handled
    module: {
        // Perform actions to the modules based off the conditions
        rules: [
            {
                // Include all modules that pass test assertion
                // In this case, files that end in .css
                test: /\.css$/i,
                // Apply array of loaders from end to start to 
                // modules that pass test. 'css-loader' is first
                use: ['style-loader', 'css-loader'],
            // Loaders transform the code of the module to make 
            // them compatible for bundling with other modules.
            },
        ],
    },
    // Create source maps from transformed code to the
    // original code for easy debugging
    devtool: 'eval-source-map',
    // 'webpack-dev-server' sets options here 
    devServer: {
        // Auto updates the watched files and bundles for
        // live reloading. JS files watched by default.
        // Does not save to dist, just helps to see changes while
        // developing, so still need to 'npx webpack' when done.
        watchFiles: ['./src/template.html'],
        // Auto open browser when using 'npx webpack serve'
        open: true,
    },
};