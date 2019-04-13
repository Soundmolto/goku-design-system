const path = require('path');
const include = path.resolve(__dirname, '../');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.css$/,
		use: [
		{ loader: 'style-loader' },
		{ loader: 'css-loader', options: { sourceMap: true, } } ]
	});

	config.module.rules.push({
		test: /\.(png|woff|woff2|eot|ttf|svg)$/,
		loaders: ['file-loader'],
		include: include
	});

	return config;
};