const express = require('express');
const request = require('request');  // npm install request

const port = 3000;  // incoming port of the LB.

const servers = ['http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003'
];

let cur = 0;

const handler = (req, res) => {
    req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
    cur = (cur + 1) % servers.length;
};


const server = express().get('*', handler).post('*', handler);
server.listen(port, () => { console.log('LB01, listening on: ', port) });