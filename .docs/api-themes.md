# API

Whole API communication is done in: `src/api/`. You can find here http requests to BOOM API and folder `src/api/organizer/detail` which are local files, simulating api. It can be easily replaced by real api endpoint when BOOM decides to move on with this tool, feature and make it fully-automatic.

Configuration itself is done by query params, see function `buildConfigFromUrl`. It's pretty straight-forward.

- `organizerId` id from boom api database
- `isProduction` by default true, use it with false to switch to staging
- `locale` if you want to skip locale detection, have fixed value [cs, en-GB]. It also hides locale switcher.
- `scrolling` to disable scrolling when app is loaded inside the iframe


## Themes

If you want to modify or add a new theme, organizer check files in:
- `src/api/vie/organizer/detail/database.ts`
- `src/api/vie/organizer/detail/themes/*`

