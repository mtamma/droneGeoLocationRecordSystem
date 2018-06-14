'use strcit';
const eventList = require('../config/eventList.json');

module.exports = function () {
    // drone endpoint
    this.listEndpoint = {
        'PUT': [
            {
                'url': '/location',
                'emitMessage': eventList.updateLocation,
            }
        ],
        'GET': [
            {
                'url': '/location',
                'emitMessage': eventList.getLocation,
            }
        ],
    };

    this.load = function (req, res, emitterInstance, data) {
        const method = req.method;
        const url = req.url;
        const listEndpoint = this.listEndpoint;
        if (_.has(listEndpoint, method)) {
            const methodEnpoint = listEndpoint[method];
            const matchEndpoint = _.find(methodEnpoint, {
                'url': url
            });

            if (matchEndpoint) {
                const emitMessage = matchEndpoint.emitMessage;
                emitterInstance.emit(emitMessage, data);
                console.log('emit: ', emitMessage);
                console.log('data: ', data);

                res.writeHead(200, {'Content-Type': 'text/plain'})
                res.write('request received successfully');
                res.end();
                return
            }
            res.end();
            return;
        }
        res.end();
    };
};