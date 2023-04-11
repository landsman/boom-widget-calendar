import {ReactNode, useEffect, useState} from "react";
import { i18n } from '@lingui/core'
import {I18nProvider} from "@lingui/react";
import {Locale} from "date-fns";
import {
    AppLocale,
    defaultLocale,
    detectLocaleResult,
} from "@local/configuration/i18n";
import {LocaleContext, LocaleResponseTypes} from "@local/configuration/i18n/context";
import {changeLocale} from "@local/runtime/i18n/change-locale";

type PropTypes = {
    fixedLocale: undefined | AppLocale;
    children: ReactNode;
}

export function LocaleProvider({ fixedLocale, children }: PropTypes) {
    const [locale, setLocale] = useState<AppLocale>(defaultLocale);
    const [localeDataForCalendar, setLocaleDataForCalendar] = useState<undefined | Locale>(undefined);
    const [messageResolved, setMessageResolved] = useState<boolean>(false);

    /**
     * user click to settings
     */
    const handleSwitchLocale = async (newValue: null | string, manual: boolean = false): Promise<void> => {
        if (manual) {
            console.debug("💬 switching locale to:", newValue);
        }
        return changeLocale(newValue, setLocaleDataForCalendar, setLocale, setMessageResolved);
    }

    /**
     * locale can be defined from outside the app, if it's not run automatic detection
     */
    useEffect(() => {
        console.debug("💬 forceLocale:", fixedLocale);
        const newValue = fixedLocale ? fixedLocale : detectLocaleResult;
        handleSwitchLocale(newValue, false);
    }, [fixedLocale])

    const contextValue: LocaleResponseTypes = {
        locale,
        switchLocale: handleSwitchLocale,
        localeDataForCalendar,
    }

    /**
     * do not render the app until we have everything loaded properly
     */
    if (!messageResolved) {
        return (
            <>Loading...</>
        );
    }

    return (
        <I18nProvider i18n={i18n}>
            <LocaleContext.Provider value={contextValue}>
                {children}
            </LocaleContext.Provider>
        </I18nProvider>
    )
}
