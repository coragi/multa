module.exports = {
    "env": {
        "jasmine": true
    },
    "plugins": ["jasmine"],
    "extends": ["eslint:recommended", "angular", "plugin:jasmine/recommended"],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "angular/controller-as": "off"
    }
};