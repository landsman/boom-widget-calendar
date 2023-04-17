import { AppLocale } from "@local/configuration/i18n";
import { locales } from '../../../lingui.config';

describe('lingui have to fit with app config', () => {
    test('compare lingui config with app enum', () => {
        const appValues = Object.values(AppLocale);
        expect(locales).toEqual(appValues);
    });
});
