const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journeyExpressSchema = new Schema(
    {
        accNo: { type: String, required: true },
        tokenID: {type: String, required: true},
        expressWay: {type: String, required: true},
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

const JourneyExpress = mongoose.model('ExpressWay',journeyExpressSchema);

module.exports = JourneyExpress;