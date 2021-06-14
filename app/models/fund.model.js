const mongoose = require("mongoose");

const Fund = mongoose.model(
    "Fund",
    new mongoose.Schema({
        fundId: String,
        shortName: String,
        longName: String,
        country: String,
        riskLevel: Number,
        price: Number,
        date: Date
    })
);

module.exports = Fund;