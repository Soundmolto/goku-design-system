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

	config.resolve.alias = Object.assign({}, config.resolve.alias, {
		react: "preact/compat",
		React: "preact/compat",
		'react-dom': 'preact/compat',
		'React-Dom': 'preact/compat'
	})

	return config;
};