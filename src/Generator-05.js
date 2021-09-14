// Generator for Lazy doing ================================================================

const co = require('co');   // Generator based control flow CO Package

import fetch from 'node-fetch';

const myurl = "https://jsonplaceholder.typicode.com/users/2";

const fetchJson = co.wrap(function* (url) {
    try {
        let request = yield fetch(url);
        let text = yield request.text();

        const data02 = JSON.parse(text)
        console.log("data02: ", data02);

        return data02;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
});