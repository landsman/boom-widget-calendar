alert("yep its working");

/**
 * api object to be used bellow
 */
const api = window?.BOOM_WIDGET_API_CALENDAR;
const snippetId = 'boom-events-org-calendar';
const host = '//localhost:3000/boom-widget-calendar/';

/**
 * util
 */
function getUnixTime() {
    const date = new Date();
    return Math.floor(date.getTime() / 1000);
}

/**
 * util
 */
function getIdValue(what) {
    return 'boom-events-org-calendar-loader-' + what;
}

/**
 * install css
 */
function stylesInstall() {
    // find place where is installed script
    const install = document.getElementById(snippetId);

    const element = document.createElement('link');
    element.rel = 'stylesheet';
    element.id = getIdValue('css');
    element.href= host + '/api/loader.css?v=' + getUnixTime();

    // insert a new external style file to load
    install.parentNode.insertBefore(element, install);
}

/**
 * install iframe
 * todo: move api paras to object
 */
function iframeInstall() {
    // find place where is installed script
    const install = document.getElementById(snippetId);

    const element = document.createElement('iframe');
    element.id = getIdValue('iframe');
    element.src = host + '?v=' + getUnixTime() + '&isProduction='+ api.isProduction + '&organizerId=' + api.organizerId;

    // insert a new external style file to load
    install.parentNode.insertBefore(element, install);
}

/**
 * run the whole thing
 */
if (null !== api) {
    console.log("BOOM_WIDGET_API_CALENDAR", api);
    stylesInstall();
    iframeInstall();
} else {
    console.error("BOOM_WIDGET_API_CALENDAR is null!");
}




//
// <style type="text/css">
//     #boom-events-org-calendar {
//     width: 100%;
//     height: 50px;
//     border: 0;
// }
// </style>
// <iframe id="boom-events-org-calendar" src="https://landsman.github.io/boom-widget-calendar/?organizerId=e637ebde-913c-4339-bb45-615293ef191c"></iframe>
// <!-- /BoomEvents.org calendar -->
