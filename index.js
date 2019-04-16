module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "standard",
    "standard-react",
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: ["flowtype"],
  parser: "babel-eslint",
  globals: {
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    // "jsx-quotes": [2, "prefer-double"],
    "react/jsx-space-before-closing": 0,
    // "react/jsx-tag-spacing": [2, { beforeSelfClosing: "always" }],
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
