module.exports.init = function (mongoose) {
    const locationSchema = new mongoose.Schema({
        'owner': {
            'type': mongoose.Schema.Types.ObjectId,
            'ref': 'Device',
            'required': true,
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
    });

    mongoose.model('Location', locationSchema);
};