module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": 0,
        "jsx-a11y/href-no-hash": 0,
        "no-console": 0,
        "no-multi-spaces": 0,
        "indent": ["error", 2],
        "semi": 0,
        "comma-dangle": ["error", {
            "functions": "ignore"
        }],
        "space-before-function-paren": 0,
        "react/jsx-uses-vars": 2
    }
};