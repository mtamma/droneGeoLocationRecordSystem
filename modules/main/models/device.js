module.exports.init = function (mongoose) {
    var deviceSchema = new mongoose.Schema({
        'name': {
            'type': String,
            'required': false,
        },
        'location': {
            'type': {
                'type': String,
                'default': 'point'
            },
            'coordinates': [Number]
        },
        'created_at': {
            'type': Date,
            'required': true,
            'default': Date.now()
        },
        'updated_at': {
            'type': Date,
            'required': true,
            'default': Date.now()
        },
    });

    mongoose.model('Device', deviceSchema);
};