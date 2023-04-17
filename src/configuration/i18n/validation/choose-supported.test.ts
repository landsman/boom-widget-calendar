import {AppLocale, chooseFromSupported} from "@local/configuration/i18n";

describe('chooseFromSupported', () => {
    test('fallback to default locale', () => {
        expect(chooseFromSupported('xh')).toEqual(AppLocale.EN);
    });

    test('supported but have to be converted', () => {
        expect(chooseFromSupported('cs')).toEqual(AppLocale.CS);
    });

    test('exact match', () => {
        expect(chooseFromSupported('cs-CZ')).toEqual(AppLocale.CS);
    });

    test('slovak', () => {
        expect(chooseFromSupported('sk')).toEqual(AppLocale.CS);
    });

});
