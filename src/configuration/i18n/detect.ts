import {detect, fromNavigator, fromStorage, fromUrl} from "@lingui/detect-locale";
import {defaultLocale} from "@local/configuration/i18n/default";

export const detectLocaleResult = detect(
    fromUrl("lang"),
    fromStorage("lang"),
    fromNavigator(),
    defaultLocale,
);
