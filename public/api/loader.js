/**
 * api object to be used bellow
 */
const api = window?.BOOM_WIDGET_API_CALENDAR;

/**
 * catalog with field names
 */
const field = {
    cdnHostname: 'cdnHostname',
    organizerId: 'organizerId',
    isProduction: 'isProduction',
    manualRun: 'manualRun',
}

/**
 * this is anchor you want to work with
 */
const idPrefix = 'boom-events-org-calendar';

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
    return idPrefix + '__loader-' + what;
}

/**
 * util
 */
function getIdValueEventListener(what) {
    return idPrefix + '__event-listener-' + what;
}

/**
 * install css
 */
function stylesInstall() {
    // find place where is installed script
    const install = document.getElementById(idPrefix);

    const element = document.createElement('link');
    element.rel = 'stylesheet';
    element.id = getIdValue('css');

    // build url
    const pathCss = 'api/loader.css';
    let url = new URL(api.cdnHostname + pathCss);
    url.search = new URLSearchParams({
        v: getUnixTime(),
    });

    // set url
    element.href = url.toString();

    // insert a new external style file to load
    install.after(element);
}

function elementInstall() {
    // find place where is installed script
    const install = document.getElementById(getIdValue('js'));

    const element = document.createElement('div');
    element.id = getIdValue('element');

    // insert a new external style file to load
    install.after(element);
}

/**
 * install iframe
 * todo: move api paras to object
 */
function iframeInstall() {
    // find place where is installed script
    const containerElement = document.getElementById(getIdValue('element'));

    const element = document.createElement('iframe');
    element.id = getIdValue('iframe');

    // build url
    let url = new URL(api.cdnHostname);
    url.search = new URLSearchParams({
        v: getUnixTime(),
        [field.isProduction]: api[field.isProduction],
        [field.organizerId]: api[field.organizerId],
    });

    // set url
    element.src = url.toString();

    // put iframe inside the element
    containerElement.innerHTML = '';
    containerElement.appendChild(element);

    // start talking each other guys
    listenIframeMessages(element);
}


/**
 * communication between parent page and iframe
 * very important to be working because of scrollbar issue
 *
 * @see #useIframeMessenger
 */
function listenIframeMessages(iframeElement) {
    const messageHandler = (event) => {
        const source = event.data?.source;
        const ourSource = getIdValueEventListener('origin');
        const eventType = event.data?.type;

        // disable unknown source!
        if (source !== ourSource) {
            console.warn("listenIframeMessages - disabled", source);
            return;
        }

        switch (eventType) {
            case 'initialized':
                iframeElement.contentWindow.postMessage(
                    {
                        source: getIdValueEventListener('consumer'),
                        type: getIdValueEventListener('discovered'),
                        currentUrl: window.location.href

                    },
                    '*',
                );
                break;

            case 'resize':
                iframeElement.height = event.data?.height;
                break;

            default:
                console.log("Unsupported eventType!", eventType);
        }
    };
    window.addEventListener('message', messageHandler, false);
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
        elementInstall();
        iframeInstall();
    }

} else {
    console.error("BOOM_WIDGET_API_CALENDAR is null!");
}
