global._ = require('lodash');
const http = require('http');
const models = require('./modules/main/models');

// create a server object
const server = http.createServer();
const initFn = function () {
    server.listen(3030, function () {
        console.log('Server start at port 3030');
    });

    const route = require('./modules/main/routes');

    const requestFn = function (req, res) {
        const method = req.method;
        const url = req.url;
        
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
};

models.init(initFn);

