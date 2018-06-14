global._ = require('lodash');
const http = require('http');
const models = require('./modules/main/models');
const eventEmitters = require('./modules/main/event-emitters');
const routes = require('./modules/main/routes');

// create a server object
const server = http.createServer();
const requestFn = function (req, res) {
    const method = req.method;
    const url = req.url;
    const data = {
        'method': method,
        'url': url,
        'emitterInstance': emitterInstance
    };
    routes.init(data);
};
const initFn = function (err) {
    if (err) {
        return;
    }
    server.listen(3030, function () {
        console.log('Server start at port 3030');
    });
    server.on('request', requestFn);
};

const emitterInstance = eventEmitters.init();
models.init(initFn);