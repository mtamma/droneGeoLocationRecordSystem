'use strict';
const async = require('async');
const ObjectID = require('mongodb').ObjectID;

module.exports.invoke = function (data, mongooseInstance) {
    const mongoose = mongooseInstance;
    const LocationModel = mongoose.model('Location');
    const DeviceModel = mongoose.model('Device');

    let longitude = data.longitude;
    let latitude = data.latitude;
    let location = {
        'type': 'point',
        coodinates: [
            longitude, latitude
        ],
    };

    const updateDevice = function (callback) {
        let query = {
            '_id': ObjectID(data.id),
        };
        let options = {
            returnNewDocument: true,
            upsert: true,
        };
        let updateData = {
            $set: {
                'location': location,
                'updated_at': Date.now
            }
        };
        let callbackFn = function (err, response) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('response updateDevice: ', response);
            data._id = response._id;
            callback();
        }
        DeviceModel.findOneAndUpdate(query, updateData, options, callbackFn);
    };

    const addLocation = function (callback) {
        let locationInstance = new LocationModel();
        locationInstance.user = ObjectID(data.id);
        locationInstance.location = location;
        locationInstance.save(callback);
    };

    console.log('trigger put drone');
    console.log('data: ', data);
    async.waterfall([
        updateDevice,
        addLocation
    ]);
};