import {createContext, useContext} from "react";
import {LocaleResponseTypes} from "@local/configuration/i18n/context";
import {localeContextDefaultValues} from "@local/configuration/i18n/context/default";

export const LocaleContext = createContext<LocaleResponseTypes>(localeContextDefaultValues);

export const useLocaleContext = () => useContext(LocaleContext);
