/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    route: true
  }
}
