/**
 * generate font-family value with safe fallbacks for every operating system
 */
export function getSafeFontFamily(googleFontFamilyName: string): string {
    return `${googleFontFamilyName},-apple-system,Arial,BlinkMacSystemFont,roboto slab,droid serif,segoe ui,Ubuntu,Cantarell,Georgia,serif`;
}
