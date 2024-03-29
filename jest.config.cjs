console.log('Jest config loaded');

module.exports = {
    "transform": {
      "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    "transformIgnorePatterns": [
      "/node_modules/(?!axios)/",
    ],
  };
  