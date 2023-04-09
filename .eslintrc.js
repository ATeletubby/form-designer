module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    sourceType: "module",
    vueFeatures: {
      scriptSetup: true,
    },
  },
  plugins: ["prettier", "vue", "@typescript-eslint"],
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
  },
};
