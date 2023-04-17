import {buildBoomWidgetIframeUrl} from "@local/configuration/boom-connect";
import {AppLocale} from "@local/configuration/i18n";

describe('buildBoomWidgetIframeUrl', () => {
    it('english widget', () => {
        const url = buildBoomWidgetIframeUrl(true, AppLocale.EN, 'hello');
        expect(url).toBe('https://connect.boomevents.org/en/event/hello/widget');
    });
});
