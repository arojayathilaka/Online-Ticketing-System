const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const creditsSchema = new Schema(
    {
        tokenType: {type: String, required: true},
        acNo: { type: String, required: true },
        currentBalance: {type: Number, required: true},
        credits: {type: Number, required: true},
        paymentMethod: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Credits = mongoose.model('Credits',creditsSchema);

module.exports = Credits;