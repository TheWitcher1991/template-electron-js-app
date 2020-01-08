module.exports = {
	'root': true,
	'env': {
		'browser': true,
        'es6': true,
        'node': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'globalReturn': true
	},
	'rules': {
		'quotes': [
			'error',
			'single'
		],
	}
};