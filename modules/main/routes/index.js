const droneRoutes = require('../../drone/routes');

module.exports.init = function (req, res, emitterInstance, data) {
    const drone = new droneRoutes();
    drone.load(req, res, emitterInstance, data);
};