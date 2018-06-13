'use strict';

global._ = require('lodash');
const http = require('http');

// create a server object
const server = http.createServer()
.listen(3030, function () {
    console.log('Server start at port 3030');
});

const requestFn = function (req, res) {
    const method = req.method;
    switch (method) {
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'GET':
            break;
    }
};

server.on('request', requestFn);


