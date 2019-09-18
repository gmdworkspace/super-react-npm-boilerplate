const path = require('path');

const rules = [{
	test: /\.jsx?$/,
	loader: 'babel-loader'
}, {
	test: /\.scss$/,
	use: [
		'style-loader',
		'css-loader',
		'sass-loader'
	]
}];

module.exports = async ({ config, mode }) => {
	config.resolve.alias.src = path.resolve(__dirname,'../src');
	config.resolve.extensions = ['.js', '.jsx', '.scss', '.sass'];
	config.module.rules = rules;
	return { ...config };
};
