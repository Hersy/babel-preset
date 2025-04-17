const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');

module.exports = defineConfig([{
  files: ['**/*.{js,mjs,cjs}'],
  extends: ['js/recommended'],
  plugins: { js },
  languageOptions: {
    sourceType: 'script',
    globals: globals.node,
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ['@babel/preset-env'],
      },
    },
  },
}]);
