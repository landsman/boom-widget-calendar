export function isProduction(): boolean {
    return "true" === process.env.REACT_APP_IS_PRODUCTION;
}
