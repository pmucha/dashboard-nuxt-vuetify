module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/base",
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
  ],
  // add your custom rules here
  rules: {
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "quote-props": ["warn", "consistent"],
    "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "semi": ["error", "never"],

    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "yoda": "error",
    "no-unused-vars": ["warn", { vars: "local", varsIgnorePattern: "^_" }],
    "no-console": ["warn", { "allow": ["log"] }],
    "no-multiple-empty-lines": ["error", { "max": 2 }],

    // Styling
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    "new-parens": ["warn", "always"],
    "no-multi-assign": ["error"],
    "no-trailing-spaces": ["warn"],
    // "one-var": ["warn", { "initialized": "never", "uninitialized": "always" }]
    "arrow-body-style": ["warn", "always"],
    "arrow-parens": ["warn", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", { "anonymous": "ignore", "named": "ignore", "asyncArrow": "ignore" }],

    // Vue
    "vue/html-self-closing": ["off"],
    "vue/singleline-html-element-content-newline": ["off"],
    "vue/no-unused-components": ["warn"],
    "vue/multiline-html-element-content-newline": ["off"],
    "vue/max-attributes-per-line": ["off"],
  },
}
