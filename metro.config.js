const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// o expo-sqlite usa um arquivo .wasm quando roda na web, então o metro precisa aceitar essa extensão
config.resolver.assetExts.push('wasm');

module.exports = config;
