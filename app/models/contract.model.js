const mongoose = require("mongoose");

const Contract = mongoose.model(
    "Contract",
    new mongoose.Schema({
        contractId: String,
        clientId: Number,
        startDate: Date,
        endDate: Date,
        premiumAmount: Number,
        frequency: String,
        deathamount: Number
    })
);

module.exports = Contract;