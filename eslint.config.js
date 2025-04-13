const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: ['js/recommended'],
    plugins: { js },
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
  },
]);
