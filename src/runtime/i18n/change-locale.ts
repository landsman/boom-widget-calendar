import {AppLocale, chooseFromSupported, dynamicActivate} from "@local/configuration/i18n";
import {lazyLoadLocale} from "@local/components/calendar";
import {Dispatch, SetStateAction} from "react";
import {Locale} from "date-fns";

/**
 * load everything needed
 */
export async function changeLocale(
    newValue: null | string,
    setLocaleDataForCalendar: Dispatch<SetStateAction<undefined | Locale>>,
    setLocale: Dispatch<SetStateAction<AppLocale>>,
    setMessageResolved: Dispatch<SetStateAction<boolean>>,
): Promise<void> {
    if (null == newValue) {
        console.error("🔥 change locale skip, newValue is null!");
        return;
    }

    console.log("new value is", newValue);

    const finalValue = chooseFromSupported(newValue);

    console.log("final value is", finalValue);

    await dynamicActivate(finalValue);
    await lazyLoadLocale(finalValue, setLocaleDataForCalendar);

    setLocale(finalValue);
    setMessageResolved(true);

    console.debug("💬 locale set to:", finalValue);
}
