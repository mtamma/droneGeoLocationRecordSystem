'use strict';
const getDroneLocation = require('./get.drone.location').invoke;
const putDroneLocation = require('./put.drone.location').invoke;

module.exports = function () {
    this.getDroneLocation = function (data) {
        getDroneLocation(data);
    };
    this.putDroneLocation = function (data) {
        putDroneLocation(data)
    };
};