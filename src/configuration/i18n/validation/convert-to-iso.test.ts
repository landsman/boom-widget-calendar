import {AppLocale} from "@local/configuration/i18n";
import {convertLocaleToISO} from "@local/configuration/i18n/validation/convert-to-iso";

describe('convertLocaleToISO', () => {
    test('validate', () => {
        expect(convertLocaleToISO('cs')).toEqual(AppLocale.CS);
        expect(convertLocaleToISO('cs')).toEqual('cs');

        expect(convertLocaleToISO('cs-CZ')).toEqual('cs');
        expect(convertLocaleToISO('cs-SK')).toEqual('cs');

        expect(convertLocaleToISO('en')).toEqual('en-GB');
        expect(convertLocaleToISO('en-GB')).toEqual('en-GB');
    });
});
