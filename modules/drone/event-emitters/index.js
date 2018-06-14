'use strict';
const eventList = require('../config/eventList.json');
const controller = require('../controllers');

module.exports = function () {
    const instance = {};
    this.triggerUpdateLocation = function (data) {
        const ctrl = new controller();
        const mongooseInstance = instance.mongooseInstance;
        ctrl.putDroneLocation(data, mongooseInstance);
    };
    this.triggerGetLocation = function (data) {
        const ctrl = new controller();
        const mongooseInstance = instance.mongooseInstance;
        ctrl.getDroneLocation(data, mongooseInstance);
    };
    this.load = function (emitterInstance, mongooseInstance) {
        instance.mongooseInstance = mongooseInstance;
        emitterInstance.on(eventList.updateLocation, this.triggerUpdateLocation);
        console.log('on: ', eventList.updateLocation);
        emitterInstance.on(eventList.getLocation, this.triggerGetLocation);
        console.log('on: ', eventList.getLocation);
    };
};