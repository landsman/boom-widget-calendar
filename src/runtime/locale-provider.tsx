import {ReactNode, useEffect, useState} from "react";
import { i18n } from '@lingui/core'
import {I18nProvider} from "@lingui/react";
import {Locale} from "date-fns";
import {
    AppLocale,
    chooseFromSupported,
    defaultLocale,
    detectLocaleResult,
    dynamicActivate
} from "@local/configuration/i18n";
import {lazyLoadLocale} from "@local/components/calendar";
import {LocaleContext, LocaleResponseTypes} from "@local/configuration/i18n/context";

type PropTypes = {
    forceLocale: undefined | AppLocale;
    children: ReactNode;
}

export function LocaleProvider({ forceLocale, children }: PropTypes) {
    const [locale, setLocale] = useState<AppLocale>(defaultLocale);
    const [localeDataForCalendar, setLocaleDataForCalendar] = useState<undefined | Locale>(undefined);
    const [messageResolved, setMessageResolved] = useState<boolean>(false);

    /**
     * load everything needed
     */
    const changeLocale = async (newValue: null | string): Promise<void> => {
        if (null == newValue) {
            console.error("🔥 change locale skip, newValue is null!");
            return;
        }

        const finalValue = chooseFromSupported(newValue);

        await dynamicActivate(finalValue);
        await lazyLoadLocale(finalValue, setLocaleDataForCalendar);

        setLocale(finalValue);
        setMessageResolved(true);

        console.debug("💬 locale set to:", finalValue);
    };

    /**
     * user click to settings
     */
    const handleSwitchLocale = async (newValue: string): Promise<void> => {
        console.debug("💬 switching locale to:", newValue);
        return changeLocale(newValue);
    }

    /**
     * locale can be defined from outside the app, if it's not run automatic detection
     */
    useEffect(() => {
        const newValue = forceLocale ? forceLocale : detectLocaleResult;
        changeLocale(newValue);
    }, [forceLocale])

    /**
     * do not render the app until we have everything loaded properly
     */
    if (!messageResolved) {
        return (
            <>Loading...</>
        );
    }

    const contextValue: LocaleResponseTypes = {
        locale,
        switchLocale: handleSwitchLocale,
        localeDataForCalendar,
    }

    return (
        <I18nProvider i18n={i18n}>
            <LocaleContext.Provider value={contextValue}>
                {children}
            </LocaleContext.Provider>
        </I18nProvider>
    )
}
