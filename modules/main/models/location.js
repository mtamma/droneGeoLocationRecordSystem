var mongoose = require('mongoose');

locationSchema = new mongoose.Schema({
    'owner': {
        'type': mongoose.Schema.Types.ObjectId,
        'ref': 'Device',
        'required': true,
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
});

mongoose.model('Location', locationSchema);