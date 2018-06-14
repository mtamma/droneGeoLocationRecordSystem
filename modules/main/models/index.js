const mongoose = require('mongoose');
const appConfig = require('../config/appConfig.json');

module.exports.init = function (callbackFn) {
    const dbName = _.get(appConfig, 'DATABASE.DB_NAME', 'geo-location-record-system');
    const userName = _.get(appConfig, 'DATABASE.DB_USER', '');
    const userPassword = _.get(appConfig, 'DATABASE.DB_USER_PASSWD', '');
    const userNameAndPassword = '';
    if (!_.isEmpty(userName) && !_.isEmpty(userPassword)) {
        userNameAndPassword = `${userName}:${userPassword}@`;
    }
    const connectionString = `mongodb://${userNameAndPassword}localhost:27017/${dbName}`;
    mongoose.connect(connectionString);
    const db = mongoose.connection;

    db.on('error', function (err) {
        console.log('connection to db error: ', err);
        return callbackFn(err);
    });

    db.once('open', function () {
        console.log('mongo db connected');
    });

    // Bring on the schema
    require('./device');
    require('./location');
    callbackFn();
};