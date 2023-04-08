module.exports = {
  root: true,
  plugins: ["prettier", "vue", "@typescript-eslint"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  env: {
    node: true,
    es6: true, 
  },
  rules: {
    "prettier/prettier": "error",
  },
};
