module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['standard', 'prettier'],
	plugins: ['prettier'],
	globals: {
		use: 'readonly',
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'prettier/prettier': 'error',
	},
};
