module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-colon-notation': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['line-width'],
      },
    ],
    'function-name-case': null,
    'value-keyword-case': null,
    'declaration-bang-space-before': null,
    'selector-class-pattern': null,
  },
  overrides: [{ files: ['**/*.less'], customSyntax: 'postcss-less' }],
};
