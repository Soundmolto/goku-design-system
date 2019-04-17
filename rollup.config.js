import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

module.exports = {
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		resolve(),
		commonjs({
			include: 'node_modules/**',
		}),
		babel({
			exclude: 'node_modules/**',
			presets: ["minify", "@babel/preset-react"]
		}),
		// uglify(),
	],
	external: ['preact', 'styled-components'],
	output: {
		format: 'cjs',
	},
};