const mongoose = require("mongoose");

const Contract = mongoose.model(
    "Contract",
    new mongoose.Schema({
        contractId: Number,
        clientId: Number,
        startDate: Date,
        endDate: Date,
        premiumAmount: Number,
        frequency: String,
        deathamount: Number
    }),
    "contract"
);

module.exports = Contract;