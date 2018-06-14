'use strict';
const eventList = require('../config/eventList.json');
const controller = require('../controllers');

module.exports = function () {
    this.triggerUpdateLocation = function (data) {
        const ctrl = new controller();
        ctrl.putDroneLocation(data);
    };
    this.triggerGetLocation = function (data) {
        const ctrl = new controller();
        ctrl.getDroneLocation(data);
    };
    this.load = function (instanceEmitter) {
        instanceEmitter.on(eventList.updateLocation, this.triggerUpdateLocation);
        console.log('on: ', eventList.updateLocation);
        instanceEmitter.on(eventList.getLocation, this.triggerGetLocation);
        console.log('on: ', eventList.getLocation);
    };
};