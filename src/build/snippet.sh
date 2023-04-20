#!/bin/bash

# minify
terser ./public/api/snippet.js -c -m --output ./build/api/snippet.min.js
terser ./public/api/loader.js -c -m --output ./build/api/loader.min.js
terser ./public/api/loader.js -c -m --output ./public/api/loader.min.js

# replacement
node ./src/build/snippet.js
