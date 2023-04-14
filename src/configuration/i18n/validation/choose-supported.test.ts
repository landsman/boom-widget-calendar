import {chooseFromSupported} from "@local/configuration/i18n";

describe('chooseFromSupported', () => {
    test('validate', () => {
        expect(chooseFromSupported('cs')).toEqual('cs-CZ');
        expect(chooseFromSupported('cs-CZ')).toEqual('cs-CZ');
        expect(chooseFromSupported('cs-SK')).toEqual('cs-CZ');

        expect(chooseFromSupported('en')).toEqual('en-GB');
        expect(chooseFromSupported('en-GB')).toEqual('en-GB');
    });
});
