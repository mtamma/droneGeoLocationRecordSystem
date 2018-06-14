'use strict';
const getDroneLocation = require('./get.drone.location').invoke;
const putDroneLocation = require('./put.drone.location').invoke;

module.exports = function () {
    this.getDroneLocation = function (data, mongooseInstance) {
        getDroneLocation(data, mongooseInstance);
    };
    this.putDroneLocation = function (data, mongooseInstance) {
        putDroneLocation(data, mongooseInstance)
    };
};