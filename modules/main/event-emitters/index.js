'use strict';
const droneEventEmitter = require('../../drone/event-emitters');

module.exports.init = function () {
    const droneEmitter = new droneEventEmitter();
    droneEmitter.load();
};