module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ["@babel/plugin-transform-modules-commonjs",['module:react-native-dotenv']]
  };
};
