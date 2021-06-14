const mongoose = require("mongoose");

const Fund = mongoose.model(
    "Fund",
    new mongoose.Schema({
        fundId: Number,
        shortName: String,
        longName: String,
        country: String,
        riskLevel: Number,
        price: Number,
        currency: String,
        date: Date
    }),
    "fund"
);

module.exports = Fund;