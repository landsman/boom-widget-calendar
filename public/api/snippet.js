/**
 * this script have to be part of client HTML, with tag element, see: "snippet-script.html" or "snippet-div.html"
 */
(function(_window, _document) {
    const prefix = 'boom-events-org-calendar';

    // find place where is installed script
    const install = _document.getElementById(prefix);
    const loader = _document.createElement('script');

    const date = new Date();
    const unixTimeStamp = Math.floor(date.getTime() / 1000);

    loader.async = true;
    loader.id = prefix + '__loader-js';
    const cdn = install.getAttribute('data-cdn');
    const pathWithQuery = cdn + '/api/loader.min.js?v=' + unixTimeStamp;
    loader.src = cdn + pathWithQuery.replace('//api', '/api');

    // insert a new external javascript file to load
    install.after(loader);

})(window, document);
