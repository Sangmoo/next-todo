module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        quotes: ["error", "double"], // 더블 쿼터 사용
        "@typescipt-eslint/quotes": ["error", "double"], // 더블 쿼터 사용
        "no-unused-vars": "off", // 사용 안한 변수 경고 중복
        "spaced-comment": "off", // 주석을 뒤에 쓰지 말라는 경고
        "@typescript-eslint/no-unused-vars": "warn", // 사용 안 한 변수는 경고
        "jsx-ally/control-has-associated-label": "off", // 상호 작용하는 엘리먼트에 label을 넣는다.
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                jx: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            } // import 시 확장자명은 사용하지 않는다.
        ]
    }
};
