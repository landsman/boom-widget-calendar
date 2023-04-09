export function isProduction(): boolean {
    return "true" === process.env.IS_PRODUCTION;
}
