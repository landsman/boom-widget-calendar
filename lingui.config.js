/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    /** @see AppLocale */
    locales: ["en-GB", "cs-CZ"],
    catalogs: [{
        path: "src/locales/{locale}/messages",
        include: ["src"]
    }],
    format: "po",
    sourceLocale: "en-GB",
    formatOptions: {
        origins: false,
        lineNumbers: false
    }
}
