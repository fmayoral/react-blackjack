console.log('Babel config loaded');

module.exports = {
  presets: [
    ['@babel/preset-env', { 
      "debug": true,
      targets: { node: 'current' }
    }]
  ],
};
