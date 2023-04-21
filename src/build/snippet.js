const path = require('path');
const fs = require("fs");
require('dotenv').config();

/**
 * global config
 */
const root = path.join(__dirname, '..', '..');
const localHostDomain = 'http://localhost:3000/boom-widget-calendar/';
const configuration = {
    customDomain: process.env.CUSTOM_DOMAIN || localHostDomain,
    source: process.env.SOURCE || path.join(root, 'public', 'api'),
    destination: process.env.DESTINATION || path.join(root, 'build'),
}

/**
 * check if directory path exist
 * if not, create it
 *
 * @param filePath
 * @returns {boolean}
 */
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

/**
 * util
 *
 * @param source
 * @param destination
 * @param find
 * @param replace
 */
function generalReplace(source, destination, find, replace) {
    return new Promise((resolve, reject) => {
        fs.readFile(source, 'utf8', function (err,data) {
            if (err) {
                reject(err);
                return;
            }
            const result = data.replace(find, replace);
            ensureDirectoryExistence(destination);
            fs.writeFile(destination, result, 'utf8', function (err) {
                if (err) {
                    reject(err)
                    return;
                }
                resolve();
            });
        });
    });
}

/**
 * replace localhost values by production ready domain
 *
 * @param source
 * @param destination
 */
function replaceCdnDomain(source, destination) {
    generalReplace(source, destination, localHostDomain, configuration.customDomain);
}

/**
 * put javascript into html template
 *
 * @param fileName
 * @param replacement
 */
function injectJavascriptToTemplate(fileName, replacement) {
    const source = path.join(configuration.source, fileName);
    const file = fileName.replace(".html", ".min.html");
    const destination = path.join(configuration.destination, 'api', file);

    // production ready
    generalReplace(source, destination,'@loader_js', replacement).then(() => {
        replaceCdnDomain(destination, destination);
    });

    // for development
    const destinationDev = path.join(configuration.source, file);
    generalReplace(source, destinationDev,'@loader_js', replacement).then(() => {
        replaceCdnDomain(destinationDev, destinationDev);
    });
}

/**
 * build process
 *
 * @param snippetJs
 * @param snippetHtmlScript
 * @param snippetHtmlDiv
 */
function run({snippetJs, snippetHtmlScript, snippetHtmlDiv}) {
    let snippetJsPath = path.join(configuration.destination, 'api', snippetJs);
    let snippetJsContent;
    try {
        snippetJsContent = fs.readFileSync(snippetJsPath);
    } catch (e) {
        throw new Error("problem with file: " + snippetJsPath, e);
    }
    injectJavascriptToTemplate(snippetHtmlScript, snippetJsContent.toString());
    injectJavascriptToTemplate(snippetHtmlDiv, snippetJsContent.toString());
}

/**
 * ⚠️ to get this "snippet.min.js" file you have run snippet.sh where are terser commands
 */
run({
    snippetJs: 'snippet.min.js',
    snippetHtmlScript: 'snippet-script.html',
    snippetHtmlDiv: 'snippet-div.html',
});
