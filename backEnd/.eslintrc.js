module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2020": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 11
	},
	"rules": {
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"no-console": 0,
		"no-empty": 0,
		"no-irregular-whitespace": 0
	}
}
