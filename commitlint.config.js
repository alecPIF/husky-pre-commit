module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    plugins: ['commitlint-plugin-function-rules'],
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['PS-']
      }
    },
    'references-empty': [2, 'never'],
    rules: {
        'scope-enum': [0],
        'function-rules/scope-enum': [
            2,
            'always',
            (parsed) => {
              const scopes = ['PS-'];
      
              if (
                !parsed.scope ||
                scopes.some((scope) => parsed.scope.startsWith(scope))
              ) {
                return [true];
              }
      
              return [false, `scope must be ${scopes.join(', ')}XXX`];
            },
        ],
        "subject-case": [2, 'always', ['sentence-case', 'lower-case']]

      },
  };