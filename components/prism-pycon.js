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
	'empty-continuation': {
		pattern: /^\.\.\.$/m,
		alias: 'punctuation'
	},
	'output': /.(?:.*(?:[\r\n]|.$))*/
};

Prism.languages['python-repl'] = Prism.languages.pycon;