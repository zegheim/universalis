/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      // see https://github.com/import-js/eslint-plugin-import/issues/1485#issuecomment-535351922
      typescript: {},
    },
  },
};
