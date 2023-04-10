const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@local': path.resolve(__dirname, 'src'),
        },
    },
};
