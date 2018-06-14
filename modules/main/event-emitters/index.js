'use strict';
const droneEventEmitter = require('../../drone/event-emitters');
const EventEmitter = require('events').EventEmitter;

module.exports.init = function (mongooseInstance, callback) {
    const emitterInstance = new EventEmitter();
    const droneEmitter = new droneEventEmitter();
    droneEmitter.load(emitterInstance, mongooseInstance);
    callback();
    return emitterInstance;

};