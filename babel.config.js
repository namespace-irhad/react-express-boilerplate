module.exports = (api) => {
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "babel-plugin-styled-components",
  ];

  return {
    presets,
    plugins,
  };
};
