const mongoose = require("mongoose");

const FundH = mongoose.model(
    "FundH",
    new mongoose.Schema({
        fundId: Number,
        price: Number,
        date: Date
    }),
    "fundh"
);

module.exports = FundH;