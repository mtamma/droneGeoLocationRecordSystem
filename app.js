global._ = require('lodash');
const http = require('http');
const {parse} = require('querystring');
const models = require('./modules/main/models');
const eventEmitters = require('./modules/main/event-emitters');
const routes = require('./modules/main/routes');

// create a server object
const server = http.createServer();
const requestFn = function (req, res) {
    collectRequestData(req, function (data) {
        routes.init(req, res, emitterInstance, data);
    });
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

const mongooseInstance = models.init();
const emitterInstance = eventEmitters.init(mongooseInstance, initFn);

const collectRequestData = function (request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
};