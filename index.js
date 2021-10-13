module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:flowtype/recommended",
    "standard",
    "standard-react",
    "plugin:prettier/recommended"
  ],
  plugins: ["flowtype"],
  parser: "babel-eslint",
  globals: {},
  env: {
    es6: true,
    node: true
  },
  rules: {
    "react/jsx-space-before-closing": 0,
    "standard/computed-property-even-spacing": 0,

    "react/prefer-stateless-function": 1,
    "react/forbid-prop-types": 0,
    "flowtype/require-valid-file-annotation": [
      0,
      "always",
      {
        annotationStyle: "line"
      }
    ]
  }
};
