/**
 * api object to be used bellow
 */
const api = window?.BOOM_WIDGET_API_CALENDAR;

/**
 * app state
 */
let state = {
    tagId: 'boom-events-org-calendar',
    id: null,
    cdn: 'https://landsman.github.io/boom-widget-calendar/',
    prod: true,
    locale: null,
    manual: false,
};

/**
 * data attributes on tag
 */
const attributes = {
    id: 'id',
    cdn: 'cdn',
    prod: 'prod',
    locale: 'locale',
    manual: 'manual',
}

/**
 * query params on iframe
 */
const queryParams = {
    organizerId: 'organizerId',
    isProduction: 'isProduction',
    scrolling: 'scrolling',
    locale: 'locale',
}

async function loadFieldsFromDataAttributes() {
    return new Promise((resolve, reject) => {
        /** get init tag */
        const tag = document.querySelector('#' + state.tagId);
        console.log("data set", tag.dataset);

        /** set organizer is must have */
        const orgId = tag.dataset[attributes.id];
        if (!orgId) {
            reject("organizerId id is not defined!");
        } else {
            state[attributes.id] = orgId;
        }

        /** run code manually? */
        const manual = tag.dataset[attributes.manual];
        if (manual) {
            state[attributes.manual] = manual;
        }

        /** override cdn? */
        const cdn = tag.dataset[attributes.cdn];
        if (cdn) {
            state[attributes.cdn] = cdn;
        }

        /** stage? */
        const prod = tag.dataset[attributes.isProduction];
        if (prod) {
            state[attributes.production] = prod;
        }

        /** override locale */
        const locale = tag.dataset[attributes.locale];
        if (locale) {
            state[attributes.locale] = locale;
        }

        resolve();
    });
}

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
    return state.tagId + '__loader-' + what;
}

/**
 * util
 */
function getIdValueEventListener(what) {
    return state.tagId + '__event-listener-' + what;
}

/**
 * install css
 */
function stylesInstall() {
    // find place where is installed script
    const install = document.getElementById(state.tagId);
    if (!install) {
        console.error("Tag not found!", state.tagId);
        return;
    }

    const element = document.createElement('link');
    element.rel = 'stylesheet';
    element.id = getIdValue('css');

    // build url
    let url = new URL(state[attributes.cdn] + 'api/loader.css');
    url.search = new URLSearchParams({
        v: getUnixTime(),
    });

    // set url
    element.href = url.toString();

    // insert a new external style file to load
    install.after(element);
}

function elementInstall() {
    const id = getIdValue('js');
    const tag = document.getElementById(id);
    if (!tag) {
        console.error("Tag not found!", id);
        return;
    }

    const element = document.createElement('div');
    element.id = getIdValue('element');

    // insert a new external style file to load
    tag.after(element);
}

/**
 * install iframe
 */
function iframeInstall() {
    const id = getIdValue('element');
    const tag = document.getElementById(id);
    if (!tag) {
        console.error("Tag not found!", id);
        return;
    }

    const element = document.createElement('iframe');
    element.id = getIdValue('iframe');
    element.scrolling = "no";

    // build url
    let url = new URL(state[attributes.cdn]);
    let params = {
        v: getUnixTime(),
        [queryParams.scrolling]: false,
        [queryParams.isProduction]: state[attributes.production],
        [queryParams.organizerId]: state[attributes.id],
    };

    // optional params with fixed locale
    if (state[attributes.locale]) {
        params[queryParams.locale] = state[attributes.locale];
    }

    url.search = new URLSearchParams(params);

    // set url
    element.src = url.toString();

    // put iframe inside the element
    tag.innerHTML = '';
    tag.appendChild(element);

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

    /** propagate methods to public object */
    // todo!
    // window.BOOM_WIDGET_API_CALENDAR.methods = {
    //     stylesInstall: stylesInstall,
    //     elementInstall: elementInstall,
    //     iframeInstall: iframeInstall,
    //     loadFieldsFromDataAttributes: loadFieldsFromDataAttributes,
    // }

    /** client want to show iframe on his own */
    if (!state.manual) {
        loadFieldsFromDataAttributes().then(() => {
            stylesInstall();
            elementInstall();
            iframeInstall();
        });
    }

} else {
    console.error("BOOM_WIDGET_API_CALENDAR is null!");
}
