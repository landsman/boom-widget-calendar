# Known issues

- `convertLocaleToISO` function to fix compatibility between lingui, app locale and `date-fns`
- https://plusreturn.com/blog/how-to-configure-a-path-alias-in-a-react-typescript-app-for-cleaner-imports/
- BOOM widget has own i18n detection, so forcing it via modified `eventUrl` includes locale code do not do the job at the moment
- javascript api in loader (`window.BOOM_WIDGET_API_CALENDAR`) is just draft for future needs
