import {detect, fromNavigator, fromStorage, fromUrl, LocaleString} from "@lingui/detect-locale";
import {defaultLocale} from "@local/configuration/i18n/default";

export const detectLocaleResult: null | LocaleString = detect(
    fromUrl("lang"),
    fromStorage("lang"),
    fromNavigator(),
    defaultLocale,
);
