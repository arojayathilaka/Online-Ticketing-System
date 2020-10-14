const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journeySchema = new Schema(
    {
        accNo: { type: String, required: true },
        tokenID: {type: String, required: true},
        startPoint: {type: String, required: true},
        desPoint: {type: String, required: true},
        appFare: {type: String, required: true},
        distance: {type: Number, required: true},
        jDate: {type: String, required: true},
        jTime: {type: String, required: true},
        fare: {type: Number, required: true}
    },
    {
        timestamps: true
    }
);

const JourneyNormal = mongoose.model('NormalJourney',journeySchema);

module.exports = JourneyNormal;