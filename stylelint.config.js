/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "layer",
          "responsive",
          "screen",
          "tailwind",
          "variants",
        ],
      },
    ],
  },
};
