module.exports = {
    "plugins": [
        [
            "postcss-preset-env",
            {
                // Options
            }
        ],
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer")
    ]
};
