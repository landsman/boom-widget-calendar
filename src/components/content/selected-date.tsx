import React from "react";
import {format} from "date-fns";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";
import {FlashMessageWrapper} from "@local/components/flash-message";

export function SelectedDate(): JSX.Element {
    const { i18n } = useLingui();
    const { localeDataForCalendar } = useLocaleContext();
    const { selectedDate } = useAppContext();

    if (undefined === selectedDate) {
        return <div />;
    }

    const formattedDate = format(selectedDate, 'PP', {
        locale: localeDataForCalendar,
    });

    return (
        <FlashMessageWrapper>
            {i18n._(t`selected_date_is`)}{': '}{formattedDate}.
        </FlashMessageWrapper>
    );
}
