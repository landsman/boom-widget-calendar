# App

Its standard app made in React. Really similar to Boom frontend. In future, it can be easily integrated to company monorepo and a lot of code can be reduced.

## Devstack

- [Caveats](CAVEATS.md)
- [Create React App](https://create-react-app.dev) as framework
- [React Date Picker](https://react-day-picker.js.org) for calendar
- [Lingui](https://lingui.dev) for localisation
- [styled-components](https://styled-components.com/) for css, overriding [BOOM's design lib](https://github.com/boomeventsorg/frontend/tree/main/packages/lib-mango)

## Dependencies

- [BOOM API](https://api.boomevents.dev/swagger-ui/index.html?urls.primaryName=Platform#/Public%20simplified%20views/v1AggregatedViewEvents)
- [BOOM sales widget](https://github.com/boomeventsorg/frontend/blob/main/packages/app-connect/public/events/v3/widget.js)
- [BOOM design lib](https://github.com/boomeventsorg/frontend/tree/main/packages/lib-mango) there is necessary to use the same interface for theming of the BOOM widget. Because it's not public package I had to copy-paste the files here 🥹 (`components/theme/lib-mango`).

