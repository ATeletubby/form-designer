module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
};
