module.exports = {
    "important": true,
    "purge": [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    "i18n": {
        "locales": ["en-US"],
        "defaultLocale": "en-US",
    },
    "darkMode": "class", // Or 'media' or 'class'
    "theme": {
        "extend": {
            "backgroundImage": (theme) => ({
                "check": "url('images/icons/check.svg')",
                "landscape": "url('images/landscape/1.png')",
            }),
        },
    },
    "variants": {
        "extend": {
            "backgroundColor": ["checked"],
            "borderColor": ["checked"],
            "inset": ["checked"],
            "zIndex": ["hover", "active"],
        },
    },
    "plugins": [],
    "future": {
        purgeLayersByDefault: true,
    },
};
