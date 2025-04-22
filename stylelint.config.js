/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recommended-scss', 'stylelint-scss'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'at-root',
          'extend',
          'if',
          'else',
          'for',
          'each',
          'use',
          'forward',
          'function',
          'return',
        ],
      },
    ],
    'order/properties-alphabetical-order': true,
    'block-no-empty': true,
    'declaration-property-value-no-unknown': null,
  },
  fix: true,
  cache: true,
}
