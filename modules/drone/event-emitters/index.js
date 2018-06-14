'use strict';
const eventList = require('../config/eventList.json');
const controller = require('../controllers');
const EventEmitter = require('events');

module.exports = function () {
    this.triggerUpdateLocation = function (data) {
        controller.putDroneLocation();
    };
    this.triggerGetLocation = function (data) {
        controller.getDroneLocation();
    };
    this.load = function () {
        const droneEvent = new EventEmitter();
        droneEvent.on(eventList.updateLocation, this.triggerUpdateLocation);
        droneEvent.on(eventList.getLocation, this.triggerGetLocation);
    };
};