// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig, defaultResolver } = require('expo/metro-config');


/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
    // [Web-only]: Enables CSS support in Metro.
    isCSSEnabled: true,
    resolver: {
      sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],
    },
  });

config.resolver.extraNodeModules.stream = require.resolve("readable-stream")
module.exports = config;
