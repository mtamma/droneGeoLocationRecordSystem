'use strcit';
const droneEventEmitter = require('../event-emitters');
const eventList = require('../config/eventList.json');
const EventEmitter = require('events');

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

    this.load = function (method, url) {
        console.log('load drone routes');
        const listEndpoint = this.listEndpoint;
        if (_.has(listEndpoint, method)) {
            const methodEnpoint = listEndpoint[method];
            const matchEndpoint = _.find(methodEnpoint, {
                'url': url
            });

            if (matchEndpoint) {
                const emitMessage = matchEndpoint.emitMessage;
                const droneEmitter = new EventEmitter();
                droneEmitter.emit(emitMessage);
            }
        }
    };
};