#!/bin/bash

# minify
mkdir -p ./build/api

rm ./build/api/snippet.min.js
terser ./public/api/snippet.js -c -m --output ./build/api/snippet.min.js

rm ./build/api/loader.min.js
terser ./public/api/loader.js -c -m --output ./build/api/loader.min.js --source-map "content=inline"

# for localhost development
rm ./public/api/loader.min.js
terser ./public/api/loader.js -c -m --output ./public/api/loader.min.js --source-map "root=http://localhost:3000/"

# replacement
node ./src/build/snippet.js
