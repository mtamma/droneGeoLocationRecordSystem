var mongoose = require('mongoose');

var deviceSchema = new mongoose.Schema({
    'name': {
        'type': String,
        'required': false,
    },
    'location': {
        'type': {
            'type': String,
        },
        'coordinates': [Number]
    },
    'created_at': {
        'type': Date,
        'required': true,
        'default': Date.now
    },
    'updated_at': {
        'type': Date,
        'required': true,
        'default': Date.now
    },
});

mongoose.model('Device', deviceSchema);