/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    moduleNameMapper: {
        // Handle module aliases
        "@local(.*)$": "<rootDir>/src/$1"
    },
}

