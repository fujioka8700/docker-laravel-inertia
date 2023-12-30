module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:vue/vue3-essential'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
