module.exports = {
  extends: 'get-off-my-lawn',
  rules: {
    'jsx-a11y/anchor-is-valid': 0,
    'no-param-reassign': 0,
    'node/no-unpublished-require': 0,
    'react/display-name': 0,
    'react/jsx-no-literals': 0,
    'react/react-in-jsx-scope': 0,
  },
  extends: "next",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}
