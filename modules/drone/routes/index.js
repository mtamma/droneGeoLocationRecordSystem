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

    this.load = function (param) {
        const method = param.method;
        const url = param.url;
        const emitterInstance = param.emitterInstance;
        const listEndpoint = this.listEndpoint;
        if (_.has(listEndpoint, method)) {
            const methodEnpoint = listEndpoint[method];
            const matchEndpoint = _.find(methodEnpoint, {
                'url': url
            });

            if (matchEndpoint) {
                const emitMessage = matchEndpoint.emitMessage;
                emitterInstance.emit(emitMessage);
                console.log('emit: ', emitMessage);
            }
        }
    };
};