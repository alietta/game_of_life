module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        sourceMap: true,
        labelFormat: '[local]',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['emotion'],
    },
    development: {
      plugins: [['emotion', { sourceMap: true }]],
    },
  },
};
