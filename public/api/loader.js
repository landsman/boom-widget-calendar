alert("yep its working");

/**
 * hosting
 * todo: replace!
 */
const cdnHostname = '//localhost:3000/boom-widget-calendar/';

/**
 * api object to be used bellow
 */
const api = window?.BOOM_WIDGET_API_CALENDAR;

/**
 * catalog with field names
 */
const field = {
    organizerId: 'organizerId',
    isProduction: 'isProduction',
    manualRun: 'manualRun',
}

/**
 * this is anchor you want to work with
 */
const snippetId = 'boom-events-org-calendar';

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

    // build url
    element.href= cdnHostname +
        '/api/loader.css?v=' +
        getUnixTime();

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

    // build url
    element.src = cdnHostname +
        '?v=' +
        getUnixTime() +
        '&isProduction='+
        api[field.isProduction] +
        '&organizerId=' +
        api[field.organizerId];

    // insert a new external style file to load
    install.parentNode.insertBefore(element, install);
}

/**
 * run the whole thing
 */
if (null !== api) {
    console.log("BOOM_WIDGET_API_CALENDAR", api);
    stylesInstall();

    // client want to show iframe on his own
    if (api.hasOwnProperty(field.manualRun)) {
        // todo: this would be a nice feature
    } else {
        iframeInstall();
    }

} else {
    console.error("BOOM_WIDGET_API_CALENDAR is null!");
}
