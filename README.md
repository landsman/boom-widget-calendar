# Boom Widget Calendar

- [Demo](https://landsman.github.io/boom-widget-calendar/?organizerId=e43780b9-a220-42d3-a026-cc97875a61e3&isProduction=false)
- [Clients](.docs/demo)

## API

The basic configuration is made via URL query params

- `organizerId` id from boom api database
- `isProduction` by default true, use it with false to switch to staging
- `locale` if you want to skip locale detection, have fixed value [cs, en-GB]. It also hides locale switcher.

## Organizers & themes

Themes and features are used by `organizerId`. 
If you need add a new organizer, theme, or change theirs ids, check following files.

- `./src/api/view/organizer/detail/database.ts`
- `./src/api/view/organizer/detail/themes/*`

## Devstack

- [Caveats](CAVEATS.md)
- https://create-react-app.dev
- https://react-day-picker.js.org
- https://lingui.dev
