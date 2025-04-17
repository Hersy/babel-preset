'use strict';

const { declare } = require('@babel/helper-plugin-utils');

module.exports = declare((api, options) => {
  api.assertVersion('^7.26.0');
  api.cache(true);

  const { debug = false, runtimeVersion } = options;

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          debug,
          exclude: [
            'transform-async-to-generator',
            'transform-template-literals',
            'transform-regenerator',
          ],
          modules: 'auto',
          targets: { node: 'current' },
        },
      ],
      [
        require('@babel/preset-react'),
        {
          development: debug,
        },
      ],
      require('@babel/preset-typescript'),
      require('babel-preset-current-node-syntax'),
    ],
    plugins: [
      require('@babel/plugin-transform-classes'),
      require('@babel/plugin-transform-member-expression-literals'),
      require('@babel/plugin-transform-nullish-coalescing-operator'),
      require('@babel/plugin-transform-numeric-separator'),
      [
        require('@babel/plugin-transform-object-rest-spread'),
        {
          useBuiltIns: true,
        },
      ],
      require('@babel/plugin-transform-optional-catch-binding'),
      require('@babel/plugin-transform-optional-chaining'),
      require('@babel/plugin-transform-property-literals'),
      require('@babel/plugin-transform-property-mutators'),
      [
        require('babel-plugin-transform-react-remove-prop-types'),
        {
          mode: 'wrap',
          additionalLibraries: ['prop-types-tools'],
          ignoreFilenames: ['node_modules'],
        },
      ],
      [
        require('@babel/plugin-transform-runtime'),
        {
          absoluteRuntime: false,
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules: false,
          version: runtimeVersion,
        },
      ],
      [
        require('@babel/plugin-transform-template-literals'),
        {
          spec: true,
        },
      ],
    ].filter(Boolean),
  };
});
