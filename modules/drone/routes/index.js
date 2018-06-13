'use strcit';

module.exports = function () {
    // drone endpoint
    this.endpoint = {
        'PUT': {
            'url': '/location',
            'emitMessage': 'put.drone.location',
        },
        'GET': {
            'url': '/location',
            'emitMessage': 'get.drone.location',
        },
    };
    this.routeExecute = function (method, url) {
        
    };
};