const droneRoutes = require('../../drone/routes');

module.exports.init = function () {
    const drone = new droneRoutes();
    drone.load();
};