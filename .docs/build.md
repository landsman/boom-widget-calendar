# Build

Whole app is made in react, and it's build to static content. It can be hosted everywhere.
Recommended hosting is AWS S3 with CloudFront invalidation.

App build is made by: `npm run build:app`

## Snippets & Loader

After app build there is publicly visible script for "iframe embedding" for users. It's called `loader.js`.

Run `npm run build:snippets` to build all necessary files for production.

- This script source code is visible in: `./public/api/`. This is not production-ready code.
- It has to be compiled by running script: `npm run build:snippet`
- After that there is minified result in: `./build/api/` (*.min.js / *.min.html)
- check `./.env` file to see supported env variables for CI, build process
