import {ReactNode, useEffect, useState} from "react";
import { i18n } from '@lingui/core'
import {I18nProvider} from "@lingui/react";
import {useAppContext} from "@local/runtime";
import {dynamicActivate} from "@local/configuration/i18n";

type PropTypes = {
    children: ReactNode;
}

export function LocaleProvider({ children }: PropTypes) {
    const { locale } = useAppContext();
    const [messageResolved, setMessageResolved] = useState<boolean>(false);

    useEffect(() => {
        dynamicActivate(locale).then(() => {
            setMessageResolved(true);
        });
    }, [locale]);

    if (!messageResolved) {
        return (
            <>Loading...</>
        );
    }

    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    )
}
