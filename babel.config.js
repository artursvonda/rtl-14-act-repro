module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        "@babel/preset-typescript",
        {
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-env",
    ],
  };
};
