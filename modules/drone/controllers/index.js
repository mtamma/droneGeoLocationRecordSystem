'use strict';
const getDroneLocation = require('./get.drone.location');
const putDroneLocation = require('./put.drone.location');

module.exports = function () {
    this.getDroneLocation = getDroneLocation;
    this.putDroneLocation = putDroneLocation;
};