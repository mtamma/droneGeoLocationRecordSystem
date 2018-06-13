global._ = require('lodash');
const http = require('http');

const createServerFn = function () {
    require('./modules/main/models');
};
// create a server object
const server = http.createServer(createServerFn);
server.listen(3030, function () {
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


