/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    /** @see AppLocale */
    locales: ["en-GB", "cs"],
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
