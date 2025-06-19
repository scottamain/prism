Prism.languages.pycon = {
	'command': {
		pattern: /^(>>> |\.\.\. ).+$/m,
		greedy: true,
		inside: {
			'prompt': {
				pattern: /^(?:>>> |\.\.\. )/,
				alias: 'punctuation'
			},
			'python-code': {
				pattern: /[\s\S]+/,
				inside: Prism.languages.python
			}
		}
	},
	'output': /.(?:.*(?:[\r\n]|.$))*/
};

Prism.languages['python-repl'] = Prism.languages.pycon;