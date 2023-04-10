import {detect, fromNavigator, fromStorage, fromUrl} from "@lingui/detect-locale";
import {defaultLocale} from "./default";

export const detectLocaleResult = detect(
    fromUrl("lang"),
    fromStorage("lang"),
    fromNavigator(),
    defaultLocale,
)
