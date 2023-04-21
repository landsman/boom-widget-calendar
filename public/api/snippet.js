/**
 * this script have to be part of client HTML, with tag element, see: "snippet-script.html" or "snippet-div.html"
 */
(function(_window, _document) {

    /**
     * ⚠️ this have to fit with id in your "html snippet"
     */
    const prefix = 'boom-events-org-calendar';

    /**
     * util
     * copy-pasted from "loader.js" with change of the first parameter
     */
    function getIdValue(tagId, what) {
        return tagId + '__loader-' + what;
    }

    /**
     * util
     * copy-pasted from "loader.js"
     */
    function stripTrailingSlash(str) {
        return str.endsWith('/') ?
            str.slice(0, -1) :
            str;
    }


    // find place where is installed script
    const tag = _document.getElementById(prefix);
    const loader = _document.createElement('script');

    const date = new Date();
    const unixTimeStamp = Math.floor(date.getTime() / 1000);

    loader.async = true;
    loader.id = getIdValue(prefix, 'js');
    const cdn = tag.getAttribute('data-cdn');
    loader.src = stripTrailingSlash(cdn) + '/api/loader.min.js?v=' + unixTimeStamp;

    // insert a new external javascript file to load
    tag.after(loader);
})(window, document);

