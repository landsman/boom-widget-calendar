const path = require('path');
const fs = require("fs");

/**
 * global config
 */
const root = path.join(__dirname, '..', '..');
const configuration = {
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
function ensureDirectoryExistence(filePath)
{
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);

    fs.mkdirSync(dirname);
}


/**
 * replace in html file
 */
function replaceInFile(fileName, replacement) {
    fs.readFile(path.join(configuration.source, fileName), 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        const result = data.replace(/<!-- @loader -->/g, replacement);

        const newFile = path.join(configuration.destination, 'api', 'snippet.min.html');
        ensureDirectoryExistence(newFile);

        fs.writeFile(newFile, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

/**
 * ⚠️ to get this file you have to run first:
 *
 * npm run build:minify_snippet
 *
 */
function run() {
    const snippetJs = fs.readFileSync(path.join(configuration.destination, 'api', 'snippet.min.js'));
    replaceInFile('snippet.html', snippetJs.toString());
}


run();
