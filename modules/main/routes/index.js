const droneRoutes = require('../../drone/routes');

module.exports.init = function (method, url) {
    const drone = new droneRoutes();
    drone.load(method, url);
};