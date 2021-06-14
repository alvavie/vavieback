const mongoose = require("mongoose");

const FundH = mongoose.model(
    "FundH",
    new mongoose.Schema({
        fundId: String,
        price: Number,
        date: Date
    })
);

module.exports = FundH;