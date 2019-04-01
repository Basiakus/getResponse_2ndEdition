const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader?' ]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader?', 'sass-loader' ]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [{
					loader: 'url-loader',
					options: {}
				}]
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				],
				include: path.join(__dirname, 'public/images')
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};