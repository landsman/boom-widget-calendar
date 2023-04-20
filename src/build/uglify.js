const path = require('path');
const replace = require('replace-in-file');

/**
 * global config
 */
const configuration = {
    source: process.env.SOURCE || path.join(__dirname, '..', '..', 'build', 'api'),
    destination: process.env.DESTINATION || path.join(__dirname, '..', '..', 'build', 'api'),
}

/**
 * processor
 */
// function renameVariables(input) {
//     return input
//         .replace(/_window/g, 'w')
//         .replace(/_document/g, 'd')
//         .replace(/_organizerId/g, 'i')
//         .replace(/_production/g, 'p')
//         .replace(/_cdnHostname/g, 'c')
//         .replace(/idPrefix/g, 'id')
//         .replace(/fieldName/g, 'f')
//         .replace(/install/g, 'j')
//         .replace(/loader/g, 'n')
//         .replace(/unixTimeStamp/g, 'u')
//         .replace(/date/g, 't')
//         .replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g,'')
//         .replace(/^\s*\n/gm, '')
//         .replace(/\n/g, '')
//         ;
// }

function renameVariables(input) {
    return input
        .replace(/\(window,document,0,0/g, '(window, document, \'__INSERT_ID__\', \'true\'')
        .replace(/organizerId="__INSERT_ID__"/g, 'organizerId=n')
        .replace(/isProduction="true"/g, 'isProduction=o')
        .replace(/const/g, 'var')
        ;
}

function uglifyLoaderHtml() {
    console.log("source", configuration.source);
    console.log("destination", configuration.destination);

    try {
        const changedFiles = replace.sync({
            files: [
                path.join(configuration.source, 'loader.min.js'),
            ],
            processor: [renameVariables],
        });
        console.log('Modified files:', changedFiles);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

// run it
uglifyLoaderHtml();
