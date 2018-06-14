'use strict';
const getDroneLocation = require('./get.drone.location');
const putDroneLocation = require('./put.drone.location');

module.exports = function () {
    this.getDroneLocation = function () {
        const instance = new getDroneLocation();
        instance();
    };
    this.putDroneLocation = function () {
        const instance = new putDroneLocation();
        instance();
    };
};