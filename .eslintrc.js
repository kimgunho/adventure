module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks", "@emotion"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // 리엑트 기본 import문을 생략해도 가능
    "no-unused-vars": "off", // 사용하지않는 변수 error처리
    "no-console": "off", // 콘솔로그를 사용하수 있음
    "@emotion/jsx-import": "off",
    "@emotion/pkg-renaming": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
