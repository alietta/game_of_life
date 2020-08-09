module.exports = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: ["airbnb-typescript", "react-app", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-boolean-cast": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/camelcase": "off",
    "object-curly-spacing": ["warn", "always"],
    "no-shadow": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "react/jsx-key": "error",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: [
          "**/__tests__*.js",
          "**/__tests__*.jsx",
          "**/__tests__*.ts",
          "**/__tests__*.tsx",
          "src/__tests__/**/*",
          "**/*.stories.tsx",
          "**/*.stories.jsx",
          "**/stories.tsx",
        ],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
    "react/button-has-type": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
  },
};
