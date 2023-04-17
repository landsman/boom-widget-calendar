import {AppLocale} from "@local/configuration/i18n";
import {convertLocaleToSupported} from "@local/configuration/boom-connect/widget/i18n/convert-locale";
import {BoomConnectLocale} from "@local/configuration/boom-connect/widget/i18n/boom-connect-locale";

describe('convertLocaleToSupported', () => {
    it('english have to be converted', () => {
        expect(convertLocaleToSupported(AppLocale.EN)).toBe(BoomConnectLocale.en);
    });
});
